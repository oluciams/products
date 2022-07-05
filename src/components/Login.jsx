
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from '../utils/api';
import PropTypes from 'prop-types';
import '../assets/scss/login.scss';
import { AuthContext } from '../context/AuthContextProvider';
import { Alert } from './Alert';

export const Login = () => {
	
	const { setToken } = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [hasError, setHasError] = useState(null);
	const navigate = useNavigate();

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handlePassword = e => {
		setPassword(e.target.value);
	};

	const resetForm = () => {
		setEmail('');
		setPassword('');
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (email && password) {
			const loginForm = { email, password };
			try {
				// const response = await axios.post('/login', loginForm);
				const { data, status } = await axios.post('/login', loginForm);	
				if(status === 200){	
					setToken(data.token);
					localStorage.setItem('token', data.token);
					resetForm();
					navigate('/home');
				}
			} catch (error) {
				const err = error.response.data.message	
				setHasError(err);	
			}
		}
	};

	return (
		<section className='login'>
			<h2 className='login__title'>Log In</h2>
			{ hasError ? <Alert hasError={hasError} /> : null }
			<form onSubmit={handleSubmit} className='login__form'>
				<div>
					<input
						className='login__input'
						type='email'
						value={email}
						onChange={handleEmail}
						name='email'
						placeholder='Email'
					/>
				</div>
				<div>
					<input
						className='login__input'
						type='password'
						value={password}
						onChange={handlePassword}
						name='password'
						placeholder='Password'
					/>
				</div>
				<button className='login__button' type='submit'>
					Log In
				</button>
			</form>
			<p className='login__paragraph'>
				Don&#39;t have an account? <a href='/signup'>Sign up</a>
			</p>
		</section>
	);
};

Login.propTypes = {
	setToken: PropTypes.func,
};
