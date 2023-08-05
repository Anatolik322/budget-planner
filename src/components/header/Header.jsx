import React from 'react'
import './header.css'
import coins from "../../img/pngwing.com.png"
function Header() {
  return (
    <header className='header'>
        <div className="logo"> <img src={coins} alt="coins" /> <span className="header_text">Budget planner</span></div>
        <div className="link"> <span className='header_link'>Stats</span></div>
    </header>
  )
}

export default Header
