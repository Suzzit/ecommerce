import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { BiCategory } from 'react-icons/bi'

const Sidebar = () => {
    const[sidebarShow, setSidebarShow] = useState(false)

    let categories = ["Men's Clothing", 'Jewelery', 'Electronics', "Women's clothing"]

    const toggleSidebar = ()=>{
        setSidebarShow(current => !current)
    }
        
  return (
    <>
    <BiCategory className='category-icon--smallscrn'
    onClick={toggleSidebar}
    />
    <aside className={'sidebar--left'}>
        <h3>Search by Category</h3>
        <ul className='sidebar--left__category-list'>
            {
                (categories!=null) ? categories
                .map((items, index)=>{
                    return <li key={index}><NavLink to={`/category/${items}`}>{items}</NavLink></li>
                }): <h1>No products found</h1>
            }
        </ul>
    </aside>
    </>
  )
}

export default Sidebar