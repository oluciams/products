import axios from 'axios';

export const signupApi = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL:'http://localhost:3001',
  timeout: 5000
});

export const loginApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});
