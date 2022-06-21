import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import './home.css'
import { productsApi } from '../utils/api';
// const axios = require('axios').default;



export const Home = ()=>{

  const [products, setProducts] = useState(false);

  const fetchData = async()=>{
    try {
      const {data} = await productsApi.get('/products');
        setProducts(data);
        console.log(data);         
    } catch (error) {
      console.error(error);
    }
  } 
  
  // async function fetchData() {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     setProducts(response.data);
  //     console.log(response.data);         
  //   } catch (error) {
  //     console.error(error);
  //   }
  // } 

  useEffect(() => {
    fetchData();    
  }, []);

  if(!products) return <h4>Loading . . .</h4>

  return (
    <>
      <section className='home'>
        <h2 className='home__title'>Products</h2>
        <div className='home__cards'>
          {
            products.map(({id, title, image})=>
            <ProductCard
            key={id}
            title={title}
            image={image}/>
            )
          }    
        </div>   
      </section>
    </>
  )
}