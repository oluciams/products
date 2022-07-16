import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const tokenStorage = localStorage.getItem('token') 

	const [token, setToken] = useState(tokenStorage);
  const [active, setActive] = useState(false);


  const handleMenu = ()=>{
    setActive(!active)
  }

  const logout = ()=>{
    localStorage.removeItem('token')
    setToken('')
  }

  useEffect(() => {
    if(token)
    setToken(tokenStorage)
  }, []);

  const value = {
    token,
    setToken,
    active, 
    handleMenu,
    logout,
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
}