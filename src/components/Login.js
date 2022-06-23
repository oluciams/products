import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../utils/api';
import PropTypes from 'prop-types';
import './login.css'

export const Login = ({setToken})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const navigate = useNavigate();

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const resetForm = ()=>{    
    setEmail('');
    setPassword('');   
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(email && password) {
      const loginForm= {email, password}
      try {
        const {data} = await loginApi.post('/login', loginForm);
        setToken(data.token);  
        localStorage.setItem('token', data.token);       
        resetForm();
        navigate('/home');
      } catch (error) {
        console.error('error') 
      }  
    }
  }

  return (
    <section className='login'> 
      <h2 className='login__title'>Log In</h2>
      <form onSubmit={handleSubmit} className='login__form'>     
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
      <p className='login__paragraph'>Don&#39;t have an account? <a href='/signup'>Sign up</a></p>
    </section> 
  )
}

Login.propTypes ={
  setToken: PropTypes.func  
}
