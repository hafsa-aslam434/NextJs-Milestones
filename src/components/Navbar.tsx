import React from 'react';
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import '../app/styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="navbar-container"> 
       <div className="navbar">
          <div className="navbar-logo">PORTFOLIO</div>

          {/* Large Screen Navbar Links */}
             <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
               <li className="navbar-link"><a href='#hero'>HOME</a></li>
               <li className="navbar-link"><a href='#about'>ABOUT</a></li>
               <li className="navbar-link"><a href='#projects'>PROJECTS</a></li>
               <li className="navbar-link"><a href='#skills'>SKILLS</a></li>
               <li className="navbar-link"><a href='#contact'>CONTACT</a></li>
             </ul>

             {/* Hamburger Menu Icon */}
            <div className="navbar-menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> :
              <AiOutlineMenu size={30}/>
              }
            </div>
       </div> 

       {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
           <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className="navbar-link">
              <a href="#hero" onClick={toggleMenu}>HOME</a></li>
              <li className="navbar-link">
              <a href="#about" onClick={toggleMenu}>ABOUT</a></li>
              <li className="navbar-link">
              <a href="#projects" onClick={toggleMenu}>PROJECTS</a></li>
              <li className="navbar-link">
              <a href="#skills" onClick={toggleMenu}>SKILLS</a></li>
              <li className="navbar-link">
              <a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
           </ul>

        )
        }
    </div>

  )
}

export default Navbar
