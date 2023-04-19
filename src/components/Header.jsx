import React from 'react'
import logo from '../assets/images/logo.png'
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  BiCategory
} from 'react-icons/all'
import { NavLink } from 'react-router-dom'
import { IconBase, IconContext } from 'react-icons'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__logo-wrapper'>
          <NavLink to={"/"}>
            <img src={logo} alt="logo-image" className='header__logo-wrapper__logo' />
          </NavLink>
        </div>

        <div className='header__search-box-wrapper'>
          <form className="header__search-box-wrapper__form">
            <input type="text" placeholder='Search for anything...' />
            <button type='submit'><AiOutlineSearch className='header__search-box-wrapper__form__searchbtn' /></button>
          </form>
        </div>

        <div className='header__cart-wrapper'>
          <div className='header__cart-wrapper--round'>
            <AiOutlineShoppingCart className='header__cart-wrapper__icon' />
          </div>
        </div>

        <div className='header__assists-wrapper'>
          <a href="">Become a seller</a>
          <a href="">Customer Care</a>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </header>

      <header className='header--smallscrn'>

        <div className='header--smallscrn__search-box-wrapper'>
          <form className="header--smallscrn__search-box-wrapper__form">
            <input type="text" placeholder='Search for anything...' />
            <button type='submit'><AiOutlineSearch className='header--smallscrn__search-box-wrapper__form__searchbtn' /></button>
          </form>
        </div>

        <IconContext.Provider 
        value={{
          color: "black",
          size: '30px'
        }}>
          <ul className='header--smallscrn__icons-list'>
            <li>
             <NavLink to={'/'}> <AiOutlineHome className='navicons'/> </NavLink>
            </li>

            <li>
             <NavLink to={'#'}> <BiCategory className='navicons'/> </NavLink>
            </li>

            <li>
             <NavLink to={'#'}> <AiOutlineUser className='navicons'/> </NavLink>
            </li>


          </ul>
        </IconContext.Provider>

      </header>
    </>
  )
}

export default Header