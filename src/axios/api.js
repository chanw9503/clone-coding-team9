import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,

  headers: {
    Authorization: '',
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return error;
  }
);
