import React, { useContext } from 'react'
import { InitialContext } from '../../context'
import dashboardImage from '../../assets/dataAnalyse.jpg'
import './index.css'

const Main = () => {
    const {darkMode,changeThemeMode} = useContext(InitialContext)
    console.log(darkMode,changeThemeMode)
  return (
    <div className={darkMode ? 'main-page-dark' : 'main-page-light' }>
      <div className='main-text-content'>
      <h1>Let's Analyse Free</h1>
      <p>A responsive financial dashboard providing real-time analytics and insights into earnings, expenses, sales, and project performance with interactive charts and widgets</p>
      </div>
      <img src={dashboardImage} alt='home' />
    </div>
  )
}

export default Main