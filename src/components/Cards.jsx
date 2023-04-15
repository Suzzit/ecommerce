import React from 'react'
import fakeimg from '../assets/images/logo.png'

const Cards = (props) => {
  return (
    <div className='card'>
        <img src={props.imgUrl}alt="product" />
        <h3>{props.title}</h3>
        <p>${props.price}</p>
    </div>
  )
}

export default Cards