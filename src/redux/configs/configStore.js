import { configureStore } from '@reduxjs/toolkit';
import { signUpSlice } from '../modules/signUp';



const store = configureStore({
    reducer : {
       sign : signUpSlice.reducer,
    }
});

export default store;
