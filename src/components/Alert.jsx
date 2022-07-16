import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/alert.scss';

export const Alert = ( { hasError}  ) => {
  return(
    <p className='alert'>{hasError}</p>
  )
}

Alert.propTypes ={  
  hasError: PropTypes.string,
  
}