import axios from 'axios';
import api from '../axios/api';

const __login = async (paylaod) => {
  console.log('__login');
  console.log(paylaod);
  const response = await axios.post('http://localhost:4000/login', paylaod);
  console.log('response', response);
  return response;
};

export { __login };
