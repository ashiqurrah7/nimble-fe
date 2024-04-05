import axios from 'axios';

const HTTP = axios.create({
  timeout: 60000,
  baseURL: 'http://localhost:3000/api/v1',
});

export default HTTP;
