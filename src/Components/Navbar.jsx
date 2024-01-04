import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
  };
  const [hamnav, sethamnav] = useState(false);
  const [active, setactive] = useState(false);
  const handlehamnav = () => {
    sethamnav(!hamnav);
    setactive(!active)
  };
  
  return (
    <div className="navbar">
      <div className="lnav">
        <h1 onClick={() => handleNav("/")}>Satyarth</h1>
      </div>
      <div className="rnav">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={handlehamnav} className={`hamburger ${active?"lowgap":""}`}>
          <div className={`hamnav ${active?"one":""} `}></div>
          <div className={`hamnav ${active?"two":""} `}></div>
          <div className={`hamnav ${active?"three":""} `}></div>
        </div>
      </div>
      <div className={`${hamnav ? "hamburgermenu" : "closeham"}`}>
        <ul>
          <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
          <li><NavLink activeClassName="active" to="/projects">Projects</NavLink></li>
          <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
