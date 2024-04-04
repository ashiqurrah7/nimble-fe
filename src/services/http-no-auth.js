import axios from 'axios';

const HTTPNoAuth = axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:3000/api/v1',
});

export default HTTPNoAuth;
