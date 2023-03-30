import { configureStore } from '@reduxjs/toolkit';
import boards from '../Modules/boardSlice';

const store = configureStore({
  reducer: { boards },
});

export default store;
