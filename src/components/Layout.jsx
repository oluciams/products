import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AuthContext } from '../context/AuthContextProvider';

export const Layout = () => {

  const {token, redirectPath} = useContext(AuthContext)
  
  if (!token) {
    return <Navigate to={redirectPath} />
  }
  return (
    <>    
      <Navbar />
      <Outlet />
    </>
  )
}


