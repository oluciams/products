import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatTime } from '../utils/formatTime';
import './productCard.css'

export const ProductCard = ({id, title, image})=>{

  const randomTime = Math.floor(Math.random() * (300 - 60) + 60); 

  const [timer, setTimer] = useState(randomTime);
  const [timerStart, setTimerStart] = useState(false);
  const [activeLink, setActiveLink] = useState(true);

  const stop = ()=>{  
    setTimerStart(false)  
  }

  const start = ()=>{
    setTimerStart(true)  
  }

  useEffect(() => {
    if(timer === 0){
      stop()
      setActiveLink(false)
    } else{
      start()
    }
  }, [timer]);

  useEffect(() => {
    let interval = null;

    if(timerStart){  
      interval =setInterval(() => {
      setTimer(prevTimer => prevTimer - 1)  
      }, 1000);
    }else {
      clearInterval(interval)
    }
    return  () => clearInterval(interval)
      
  }, [timerStart]);

  return(  
    <div key={id} className='card'>
      <img src={image} className='card__image' alt='product'/>
      <h5 className='card__title'>{title}</h5>
      <div className='card__detail'>        
      <p className='card__time'>{formatTime(timer)}</p>  
      <Link to='/detail' state={{id}} className={activeLink ? 'card__button' : 'card__button is-active' }>Go To Detail</Link>         
      </div>
    </div>    
  )
}

ProductCard.propTypes ={  
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string, 
}