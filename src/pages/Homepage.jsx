import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'

const Homepage = () => {
  // const[data, setData] = useState()
  // const [productsData, setProductsData] = useState()
  const [url, setUrl] = useState("https://fakestoreapi.com/products")

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products").then((res)=>{
  //     return res.json()
  //   }).then((data)=>{
  //     setData(data)
  //   })
  // }, [])
  // "https://fakestoreapi.com/products"
  
  let productsData = useFetch(url)

  return (
    <main className='main'>
        <section className='main__homepage'>
          {
            (productsData!=null)?productsData.map((item, index)=>{
              return <Cards key={index} imgUrl={item.image} title={item.title} price={item.price} />
            }) : <h1>No products found</h1>
          }
        </section>  
    </main>
  )
}

export default Homepage