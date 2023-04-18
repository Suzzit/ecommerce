import React from 'react'
import Cards from './Cards'
import Loading from './Loading'

const Productshowcase = (props) => {
  // const [itemsLoading, setItemsLoading] = useState()
  // setItemsLoading(props.loading)
  let productsData = props.productsData
  return (
      <section className='product-showcase'>
        {
          props.loadingState?  <Loading />:
          (productsData != null) ? productsData.map((item, index) => {
            return <Cards key={index} imgUrl={item.image} title={item.title} price={item.price} />
          }) : <h1>No products found</h1>
        }
      </section>
  )
}

export default Productshowcase