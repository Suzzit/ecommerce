import React from 'react'
import Cards from './Cards'

const Productshowcase = (props) => {
    let productsData = props.productsData
  return (
    <main className='main'>
    <section className='product-showcase'>
          {
            (productsData!=null)?productsData.map((item, index)=>{
              return <Cards key={index} imgUrl={item.image} title={item.title} price={item.price} />
            }) : <h1>No products found</h1>
          }
        </section>
        </main>
  )
}

export default Productshowcase