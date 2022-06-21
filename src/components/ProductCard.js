import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './productCard.css'

export const ProductCard = ({id, title, image})=>{
  return(  
    <div key={id} className='card'>
      <img src={image} className='card__image' alt='product'/>
      <h5 className='card__title'>{title}</h5>
      <div className='card__detail'>
        <p className='card__time'> 00:00:00 </p>      
        <Link to='/detail' className='card__button'>Go To Detail</Link>
      </div>        
    </div>    
  )
}

ProductCard.propTypes ={  
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string  
}