import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';

function App() {
	return (
		<>
		<Navbar/>		
		<Routes>	
			<Route path='/' element={<Signup/>}/>
			<Route path='login' element={<Login/>}/>
			<Route path='/home' element={<Home/>}/>
			<Route path='/about' element={<About/>}/>			
		</Routes>
		</>
	);
}

export default App;
