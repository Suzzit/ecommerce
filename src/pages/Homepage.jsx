import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import useFetch from '../hooks/useFetch'

const Homepage = () => {
  // const[data, setData] = useState()
  // const [productsData, setProductsData] = useState()
  const [url, setUrl] = useState("https://fakestoreapi.com/products")
  let productsData

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products").then((res)=>{
  //     return res.json()
  //   }).then((data)=>{
  //     setData(data)
  //   })
  // }, [])
  // "https://fakestoreapi.com/products"

  try{
    productsData = useFetch(url)
    console.log(productsData)
  }catch(err){
    console.log(err)
  }

  return (
    <main className='main'>
        <section className='main__homepage'>
          {
            (productsData!=null)?productsData.map((item, index)=>{
              return <Cards key={index} imgUrl={item.image} title={item.title} price={item.price} />
            }) : <h1>No products found</h1>
          }
        </section>  
        {/* <div className='goup' style={
          {
            backgroundColor: "red",
            position: "fixed",
            height: "fit-content",
            width: "fit-content",
            top: "90%",
            left: "90%",
          }
        } role='button' onClick={()=>{
          window.scrollTo({ 
            top: 0,
            behavior: 'smooth' 
          })
        }}> UP </div> */}
    </main>
  )
}

export default Homepage