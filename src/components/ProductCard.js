import React from 'react';
import './productCard.css'

export const ProductCard = ()=>{
  return(  
    <div className='card'>
      <img className='card__image'></img>
      <h5 className='card__title'>Descripcion</h5>
      <div className='card__detail'>
        <p className='card__time'> 00:00:00 </p>      
        <a className='card__button'>Go To Detail</a>
      </div>      
    </div>    
  )
}