import React from 'react'
import Sidebar from './Sidebar'
import MainDash from './MainDash/MainDash'
import './Landing.css'


const Landing = () => {
  return (
    <div className="App">
        <div className="AppGlass">
            <Sidebar />
            <MainDash />
        </div>
    </div>
  )
}

export default Landing
