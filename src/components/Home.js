import React from 'react';
import './home.css'
import { ProductCard } from './ProductCard';

export const Home = ()=>{
  return (
    <>
    <section className='home'>
    <h2 className='home__title'>Products</h2>
    <div className='home__cards'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>      
    </div>  
    </section>
    </>
  )
}