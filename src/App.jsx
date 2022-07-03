import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Detail } from './components/Detail';
import { Home } from './pages/Home';
import { Login } from './components/Login';
import { Layout } from './components/Layout';
import { Signup } from './components/Signup';
import { AuthContextProvider } from './context/AuthContextProvider';
import { NotFound } from './pages/NotFound';

function App() {

	return (
		<>
		<AuthContextProvider>
			<Routes>
				<Route index element={<Login />}/>	
				<Route path='signup' element={<Signup />}/>
				<Route path='login' element={<Login />}/>			
				<Route element={<Layout redirectPath ='/login'/>}>
					<Route path='home' element={<Home />}/>
					<Route path='about' element={<About />}/>
					<Route path='detail' element={<Detail />}/>	
				</Route>
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</AuthContextProvider>
		</>
	);
}

export default App;
