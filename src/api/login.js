import axios from 'axios';
import api from '../axios/api';

const __login = async (paylaod) => {
  console.log('__login');
  console.log(paylaod);
  const response = await api.post('/login', paylaod);
  return response;
};

export { __login };
