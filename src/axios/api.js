/**
 *
 * 작성자 : 박찬우
 * 목적 : axios instance 화
 * 작성날짜 : 2023.03.24
 *
 */

import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
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
    console.log('config', config);
    return config;
  },
  function (error) {
    return error;
  }
);

export default instance;
