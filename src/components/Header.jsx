import React from 'react'
import logo from '../assets/images/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  return (
      <header className='header'>
        <div className='header__logo-wrapper'>
          <img src={logo} alt="logo-image" className='header__logo-wrapper__logo' />
        </div>

        <div className='header__search-box-wrapper'>
          <form className="header__search-box-wrapper__form">
            <input type="text" placeholder='Search for anything...'/>
            <button type='submit'>Search</button>
          </form>
        </div>

        <div className='header__cart-wrapper'>
          <div className='header__cart-wrapper--round'>
          <AiOutlineShoppingCart className='header__cart-wrapper__icon'/>
          </div>
        </div>

        <div className='header__assists-wrapper'>
            <a href="">Become a seller</a>
            <a href="">Customer Care</a>
            <a href="">Login</a>
            <a href="">Register</a>
        </div>
      </header>  
  )
}

export default Header