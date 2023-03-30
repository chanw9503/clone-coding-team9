import { setCookie } from '../auth/Cookie';
import api from '../axios/api';

const __login = async (paylaod) => {
  const response = await api.post('/login', paylaod);
  setCookie('token', response.data.token);
  return response;
};

const addSign = async (newUser) => {
  await api.post('/signup', newUser);
};

const confirmEmail = async (userEmail) => {
  await api.post('/validate', userEmail);
};

export { __login, addSign, confirmEmail };
