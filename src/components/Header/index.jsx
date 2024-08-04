import React, { useContext } from 'react'
import { InitialContext } from '../../context'
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import './index.css'

const Header = () => {
    const {darkMode,changeThemeMode,changeMenu} = useContext(InitialContext)
  return (
    <header className={darkMode ? 'header-container-dark' : 'header-container-light' }>
        <div className='menu-button'>
            <button onClick={()=> changeMenu()}><RiMenu2Fill /></button>
        </div>
        <div className={darkMode ? 'left-header-dark' : 'left-header-light' }>
            <span>Pages/Dashboard</span>
            <span>Main Dashboard</span>
        </div>
        <div className={darkMode ? 'right-header-dark' : 'right-header-light' }>
            <div className={darkMode ? 'search-container-dark' : 'search-container-light' }>
                <IoIosSearch />
                <input type='search' placeholder='Search' />
            </div>
            <div className={darkMode ? 'other-icons-dark' : 'other-icons-light' }>
                <IoNotificationsOutline />
                <button onClick={()=> changeThemeMode()}><FaMoon /></button>
                <IoInformationCircleOutline />
                <img width={'20px'} src='https://res.cloudinary.com/dmoa3xmnx/image/upload/v1720141095/havahavaiprofile.jpg' alt='profile' />
            </div>
        </div>
    </header>
  )
}

export default Header