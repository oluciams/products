import React from 'react';
import { Navbar } from './components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Layout = ({ token, setToken, redirectPath }) => {
  
  if (!token) {
    return <Navigate to={redirectPath} />
  }
  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <Outlet />
    </>
  )
}

Layout.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
  redirectPath: PropTypes.string
}



