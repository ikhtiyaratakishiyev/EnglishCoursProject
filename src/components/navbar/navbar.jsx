import React from 'react';
import {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png';


import './navbar.scss';

const Navbar = () => {

  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='Ayna__navbar'>
       <div className="Ayna__navbar-links">
          <div className="Ayna__navbar-links-logo">
            <img src={logo} alt="logo" />
            <h1>Learn English with Us</h1>
          </div>
          <div className="Ayna__navbar-links_container">
          <p><a href="#home">Home</a></p>
            <p><a href="#about">Our Projects</a></p>
            <p><a href="#possibility">Our Teachers</a></p>
            <p><a href="#features">Our Students</a></p>
             <p><a href="#blog">Library</a></p>
          </div>
        </div>

        <div className="Ayna__navbar-sign">
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>

          <div className="Ayna__navbar-menu">
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}


            {toggleMenu &&(
              <div className='Ayna__navbar-menu_container scale-up-center'>
                <div className='Ayna__navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
            <p><a href="#about">Our Projects</a></p>
            <p><a href="#possibility">Our Teachers</a></p>
            <p><a href="#features">Our Students</a></p>
             <p><a href="#blog">Library</a></p>
                <div className="Ayna__navbar-menu_container-links-sign">
                       <p>Sign in</p>
                      <button type='button'>Sign up</button>
                    </div>
                </div>
                     
              </div>
            )}

       
          </div>
        </div>        
    
  )
}

export default Navbar