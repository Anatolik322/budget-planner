import React from 'react'
import './header.css'
import coins from "../../img/pngwing.com.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
        <div className="logo"> <img src={coins} alt="coins" /> <span className="header_text">Budget planner</span></div>
        <Link to={'/stats'}><div className="link"> <span className='header_link'>Stats</span></div></Link>
    </header>
  )
}

export default Header
