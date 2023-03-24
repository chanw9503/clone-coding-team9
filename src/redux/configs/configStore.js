import { configureStore } from '@reduxjs/toolkit';
import login from '../modules/loginSlice';
import signUp from '../modules/signUpSlice';

const store = configureStore({
  reducer: { login, signUp },
});

export default store;
