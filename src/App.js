import React from 'react';
import './App.css';
// import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';

function App() {
	return (
		<div>
			<header>			
				<Navbar/>
			</header>
				<Signup/>
				{/* <Login/> */}
		</div>
	);
}

export default App;
