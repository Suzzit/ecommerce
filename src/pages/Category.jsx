import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Productshowcase from '../components/Productshowcase'

const Category = () => {
  const { productCategory } = useParams()
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/category/${productCategory.toLocaleLowerCase()}`)
      .then(res => res.json())
      .then((data) => {
        setProductsData(data)
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
        setError({ status: true, errMsg: err.message })
      })
  }, [productCategory])

  return (
    <>
      Showing Results for {productCategory}
      {error.status ? <Error errMsg={error.errMsg} /> :
        <Productshowcase loadingState={loading} productsData={productsData} />
      }
    </>
  )
}

export default Category