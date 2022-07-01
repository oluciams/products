import axios from 'axios';

function getProducts () {  
  return axios.get('https://fakestoreapi.com/products');
}

const products = {
  getProducts
}

export default products;




