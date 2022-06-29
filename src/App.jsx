import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Detail } from './components/Detail';
import { Home } from './pages/Home';
import { Login } from './components/Login';
import { Layout } from './components/Layout';
import { Signup } from './components/Signup';

function App() {
	const tokenStorage = localStorage.getItem('token') 
	const [token, setToken] = useState(tokenStorage);

	return (
		<>
			<Routes>
				<Route index element={<Login/>}/>	
				<Route path='signup' element={<Signup/>}/>
				<Route path='login' element={<Login setToken={setToken}/>}/>	
				<Route element={<Layout token={token} setToken={setToken} redirectPath ='/login'/>}>
					<Route path='home' element={<Home/>}/>
					<Route path='about' element={<About/>}/>
					<Route path='detail' element={<Detail/>}/>	
				</Route>
			</Routes>
		</>
	);
}

export default App;
