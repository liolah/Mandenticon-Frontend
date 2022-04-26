import React from 'react';
import {RiMenu3Line , RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="mandala__navbar">
      <div className="mandala__navbar-links">
        <div className="mandala__navbar-links_logo">
          <img src={logo} alt="logo" /> 
        </div>
      </div>
        <div className="mandala__navbar-links_container">
          <p><a href="Home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#Mandala">Mandala</a></p>
        </div>
        <Link to = "/mandala">
          <div className="mandala__navbar-sign">
        <button type="button">Start Now</button>
         </div>
        </Link>
       
  
    </div>
      
  )
}

export default Navbar