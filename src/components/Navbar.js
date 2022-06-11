import React from 'react';
import './navbar.css';

export const Navbar =()=>{
  return(
    <section className='navbar'>      
      <nav className="navbar__menu">
        <div>
        <a className='navbar__title'>Products</a>
        <a className='navbar__link navbar__link--text' href="#inicio">Home</a>
        <a className='navbar__link navbar__link--text' href="#acerca">About</a>
        </div>
        <div>
        <a className='navbar__link navbar__button' href="#Login">Log In</a>
        <a className='navbar__link navbar__button navbar__button--dark' href="#signup">Sign Up</a>        
        </div>
      </nav>
    </section>
  )
}