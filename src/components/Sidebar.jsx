import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Sidebar = () => {

    let categories = ["Men's Clothing", 'Jewelery', 'Electronics', "Women's clothing"]
        
  return (
    <aside className='sidebar--left'>
        <ul className='sidebar--left__category-list'>
            {
                (categories!=null) ? categories
                .map((items, index)=>{
                    return <li key={index}><NavLink to={`/category/${items}`}>{items}</NavLink></li>
                }): <h1>No products found</h1>
            }
        </ul>
    </aside>
  )
}

export default Sidebar