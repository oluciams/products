import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

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



