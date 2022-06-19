import React, { useState } from 'react';
import './login.css'

export const Login = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password) {
      saveFormData(email, password);
      setEmail('');
      setPassword('');
    }
  }

  const saveFormData = (email, password)=>{
    const formLogin = {email, password}
    console.log(formLogin)
  }

  return (
    <section className='login'> 
      <h2 className='login__title'>Log In</h2>
      <form onSubmit={handleSubmit} className='login__form' method='POS' action=''>     
        <div>        
          <input
            className='login__input'
            type='email'
            value={email}
            onChange={handleEmail}
            name='email'
            placeholder='Email'/>    
        </div>
        <div>        
          <input 
            className='login__input'
            type='password'
            value={password}
            onChange={handlePassword}          
            name='password'
            placeholder='Password'/>
        </div>               
        <button 
          className='login__button'
          type="submit">
          Log In
        </button>             
      </form> 
      <p className='login__paragraph'>Don&#39;t have an account? <a href='/'>Sign up</a></p>
    </section> 
  )
}