import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AuthContext } from '../context/AuthContextProvider';
import PropTypes from 'prop-types';

export const Layout = ({redirectPath}) => {

  const {token } = useContext(AuthContext)
  
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

Layout.propTypes = {
  redirectPath: PropTypes.string.isRequired
}


