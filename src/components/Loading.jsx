import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const Loading = () => {
  return (
    <div className='loading-screen'>
      <FiShoppingCart className='loading-icon'/>
      <h5>Loading items...</h5>
    </div>
  )
}

export default Loading