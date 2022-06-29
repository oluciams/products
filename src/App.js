import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Detail } from './components/Detail';
import { Home } from './pages/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { Signup } from './components/Signup';

function App() {
	const tokenStorage = localStorage.getItem('token') 
	const [token, setToken] = useState(tokenStorage);

	return (
		<>
		<Navbar token={token} setToken={setToken}/>		
		<Routes>
			<Route index element={<Login/>}/>	
			<Route path='signup' element={<Signup/>}/>
			<Route path='login' element={<Login setToken={setToken}/>}/>	
			<Route element={<PrivateRoute token={token} redirectPath ='/login'/>}>
				<Route path='home' element={<Home/>}/>
				<Route path='about' element={<About/>}/>
				<Route path='detail' element={<Detail/>}/>	
			</Route>
		</Routes>
		</>
	);
}

export default App;
