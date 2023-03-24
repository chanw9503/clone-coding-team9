import { configureStore } from '@reduxjs/toolkit';
import { signUpSlice } from '../modules/signUp';



import login from '../Modules/loginSlice';

const store = configureStore({
  reducer: { login },
});
const store = configureStore({
    reducer : {
       sign : signUpSlice.reducer,
    }
});

export default store;
