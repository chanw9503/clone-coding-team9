import { configureStore } from '@reduxjs/toolkit';
import login from '../Modules/loginSlice';
import signUp from '../Modules/signUpSlice';

const store = configureStore({
  reducer: { login, signUp },
});

export default store;
