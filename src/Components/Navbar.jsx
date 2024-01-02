import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const handleNav = (path)=>{
    navigate(path)
  }
  return (
    <div className='navbar'>
      <div className='lnav'>
        <h1 onClick={()=>handleNav("/")}>Satyarth</h1>
      </div>
      <div className='rnav'>
        <ul>
            <li><NavLink  activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
            <div className='hamburger'>
            <div className='hamnav 1'></div>
            <div className='hamnav 2'></div>
            <div className='hamnav 3'></div>
            </div>
          
        </ul>
     
      </div>
    </div>
  )
}

export default Navbar
