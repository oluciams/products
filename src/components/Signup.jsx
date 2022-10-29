import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/api';
import '../assets/scss/signup.scss';
import { Alert } from './Alert';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [hasError, setHasError] = useState(null);

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
        const response = await axios.post('/signup', signupForm)
        if(response.status === 201){               
          resetForm();
          navigate('/login')
        }  
      } catch (error) { 
        const {response: { data }} = error
        if (data.code === 11000){
          setHasError('Duplicate Mail');
        } else {  
          const err = data.error.errors[0]  
          setHasError(err);
        }
      } 
    }
  }

  return( 
     
    <section className='register'> 
      <h2 className='register__title'>Sign Up</h2>
      { hasError ? <Alert hasError={hasError} /> : null }
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