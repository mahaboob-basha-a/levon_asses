import React, { useContext } from 'react'
import { InitialContext } from '../../context'
import './index.css'

const Footer = () => {
    const {darkMode} = useContext(InitialContext)
  return (
    <footer class={darkMode ? "footerContainer-dark" : "footerContainer-light" }>
        <div class={darkMode ? "footerNav-dark": "footerNav-light" }>
            <ul><li>Home</li>
                <li>Dashboard</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div> 
        <span class={darkMode ? "footerBottom-dark" : "footerBottom-light" }>Copyright &copy;2024; Designed by Levon</span>
    </footer>
  )
}

export default Footer