import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './detail.css'

export const Detail = ()=>{

  const [detail, setDetail] = useState(false);

  async function fetchDetail() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/1');
      setDetail(response.data);
      console.log(response.data);
      console.log(detail)         
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    fetchDetail();    
  }, []);

  return(
    <section className='detail'>
      <h2 className='detail__title'>Product Detail</h2> 
      <div className='detail__container'>      
        <div className='detail__header'>
          <img src={detail.image} className='detail__image' alt='...'/>
          <p className='detail__rate'><small className=''>3 estrellas</small></p>
        </div>
        <div className='detail__body'>
          <h3 className='detail__name'>Product: {detail.title}</h3>
          <h4 className='detail__price'>Price: {detail.price}</h4>
          <p className='detail__description'>Description: {detail.description}</p>
          <p className='detail__category'>Category: {detail.category}.</p>
          <p className='detail__count'>Cantidad:{detail.rating.rate} &#40;{detail.rating.count}&#41;</p> 
          {console.log(detail.rating.rate)}          
          </div>      
      </div>
      <div className='detailLink'>
      <Link className='detail__link' to='/home'>volver</Link>
      </div>
    </section>   
  )
}
