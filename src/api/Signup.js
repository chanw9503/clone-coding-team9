import axios from 'axios';
import api from '../axios/api';

const addSign = async (paylaod) => {
  console.log(paylaod);
  const response = await api.post('/signup', paylaod);
  return response;
};

export { addSign };
