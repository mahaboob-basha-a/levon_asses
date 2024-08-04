import React, { useContext } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import './index.css'
import { NavLink } from 'react-router-dom';
import { InitialContext } from '../../context';

const Sidebar = () => {
  const {darkMode,menu,changeMenu} = useContext(InitialContext)
  return (
    <>
    <aside className={darkMode ? 'side-bar-desktop-dark' : 'side-bar-desktop-light' }>
        <h3>Analyse Free</h3>
        <ul>
          <li><NavLink to='/'><MdHomeFilled /> Home</NavLink></li>
          <li><NavLink to='/dashboard'><MdOutlineDashboard /> Dashboard</NavLink></li>
        </ul>
    </aside>
    {menu &&
    <div className={darkMode ? 'side-bar-mobile-dark' : 'side-bar-mobile-light' }>
        <h3>Analyse Free</h3>
        <ul>
          <li onClick={()=> changeMenu()}><NavLink to='/'><MdHomeFilled /> Home</NavLink></li>
          <li onClick={()=> changeMenu()}><NavLink to='/dashboard'><MdOutlineDashboard /> Dashboard</NavLink></li>
        </ul>
    </div> }
    </>
  )
}

export default Sidebar