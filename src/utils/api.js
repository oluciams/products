import axios from 'axios';

export const signupApi = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
})

