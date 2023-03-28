import api from '../axios/api';

const __login = async (paylaod) => {
  console.log('__login');
  console.log(paylaod);
  const response = await api.post('/login', paylaod);
  return response;
};

const addSign = async (newUser) => {
  await api.post('/signup', newUser);
};

const confirmEmail = async (userEmail) => {
  await api.post('/validate', userEmail);
};

export { __login, addSign, confirmEmail };