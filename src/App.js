import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
		</Routes>
		</>
	);
}

export default App;
