import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({token, redirectPath})=>{
  if(!token){
    return <Navigate to={redirectPath}/>
  } 
  return(
    <Outlet/>  
  )
}

PrivateRoute.propTypes ={
  token: PropTypes.string.isRequired,
  redirectPath: PropTypes.string
}