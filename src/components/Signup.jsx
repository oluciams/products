import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../utils/api';
import '../assets/styles/signup.css';

export const Signup = ()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const navigate = useNavigate();
 
  const handleName = (e) =>{
    setName(e.target.value) 
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleConfirmationPassword = (e)=>{
    setConfirmationPassword(e.target.value)
  }

  const resetForm = ()=>{
    setName('');
    setEmail('');
    setPassword('');
    setConfirmationPassword('');
  }

  const handleOnSubmit = async(e)=>{
    e.preventDefault(); 
    if(name && email && password && confirmationPassword) {
      const signupForm = {name, email, password, confirmationPassword}
      try {
        await signupApi.post('/signup', signupForm)              
        resetForm();
        navigate('/login')     
      } catch (error) {
        console.error('error')        
      } 
    }
  }

  return( 
     
    <section className='register'> 
      <h2 className='register__title'>Sign Up</h2>
      <form onSubmit={handleOnSubmit} className='resgister__form'>
        <div>        
          <input 
            className='register__input'
            type='tex'
            value={name}
            onChange={handleName}
            name='name'
            placeholder='Full Name'/>
        </div>
        <div>        
          <input
            className='register__input'
            type='email'
            value={email}
            onChange={handleEmail}
            name='email'
            placeholder='Email'/>    
        </div>
        <div>        
          <input
            className='register__input'
            type='password'
            value={password}
            onChange={handlePassword}
            name='password'
            placeholder='Password'/>
        </div>
        <div>        
          <input
            className='register__input'
            type='password'
            value={confirmationPassword}
            onChange={handleConfirmationPassword}
            name='confirmationPassword'
            placeholder='Confirmation Password'/>
        </div>         
        <button
          className='register__button'
          type="submit">
          Sign Up
        </button>             
      </form> 
      <p className='register__paragraph'>Already have an account? <a href='/login'>Log In</a></p>    
    </section> 
  )
} 