import axios from 'axios';
import Cookies from 'js-cookie';

const HTTP = axios.create({
  timeout: 60000,
  baseURL: 'http://localhost:3000/api/v1',
});

 const token = Cookies.get('token');
 console.log(token);
 HTTP.defaults.headers.common.Authorization = `Bearer ${token}`;

export default HTTP;
