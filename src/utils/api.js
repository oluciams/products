import axios from 'axios';

export const signupApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
});

export const loginApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

export const productsApi = axios.create({
  baseURL: 'https://fakestoreapi.com',  
  timeout: 5000,
});
