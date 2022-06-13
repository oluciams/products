import React from 'react';
import './navbar.css';

export const Navbar =()=>{
  return(
    <section className='navbar'>
      <div>
       <a className='navbar__title'>Products</a>
      </div>
      <button className="navbar__menu--active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
        <svg className="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
      </button>      
      <nav className="navbar__menu">
        <div>
        <a className='navbar__link' href="#inicio">Home</a>
        <a className='navbar__link' href="#acerca">About</a>
        </div>
        <div>
        <a className='navbar__link navbar__button' href="#Login">Log In</a>
        <a className='navbar__link navbar__button navbar__button--dark' href="#signup">Sign Up</a>        
        </div>
      </nav>
    </section>
  )
}