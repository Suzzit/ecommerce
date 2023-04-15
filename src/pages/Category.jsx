import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Cards from '../components/Cards'
import Loading from '../components/Loading'

const Category = () => {
    const {productCategory} = useParams()
    const [productsData, setProductsData] = useState([])
    const [loading, setLoading] = useState()

    // let data = useFetch(`https://fakestoreapi.com/products/category/${productCategory.toLocaleLowerCase()}`)

    useEffect(()=>{
      setLoading(true)
      fetch(`https://fakestoreapi.com/products/category/${productCategory.toLocaleLowerCase()}`)
      .then(res => res.json())
      .then((data)=>{
          setProductsData(data)
          setLoading(false)
      })
  }, [productCategory])

    return (
    <div style={
        {
            height: "100vh",
            marginTop: "1rem",
            marginLeft: "20%"
        }
    }>
        Showing Results for {productCategory}

      {
      loading? <Loading /> :
        <section className='main__homepage'>
          {
            (productsData?.length > 0)?productsData.map((item, index)=>{
              return <Cards key={index} imgUrl={item.image} title={item.title} price={item.price} />
            }) : <h1>No products found</h1>
          }
        </section>
      } 
    </div>
  )
}

export default Category