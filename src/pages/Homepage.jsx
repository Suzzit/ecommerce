import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'
import Productshowcase from '../components/Productshowcase'

const Homepage = () => {
  // const[data, setData] = useState()
  // const [productsData, setProductsData] = useState()

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products").then((res)=>{
  //     return res.json()
  //   }).then((data)=>{
  //     setData(data)
  //   })
  // }, [])
  // "https://fakestoreapi.com/products"

  const [url, setUrl] = useState("https://fakestoreapi.com/products")
    let productsData

    try{
        productsData = useFetch(url)
        console.log(productsData)
      }catch(err){
        console.log(err)
      }

  return (
    <main className='main'>
      <Productshowcase productsData={productsData} />
    </main>
  )
}

export default Homepage