import React from 'react'

const Sidebar = () => {
    const categories = ["Women's Fashion", "Men's Fashion", "kids", "Health & Beauty", 
    "Watches Bags and Jwellerys", "Electronics", "Home Appliances", "Plants & Gardening"]
  return (
    <aside className='sidebar--left'>
        <ul className='sidebar--left__category-list'>
            {
                categories.map((items, index)=>{
                    return <li><a href="">{items}</a></li>
                })
            }
        </ul>
    </aside>
  )
}

export default Sidebar