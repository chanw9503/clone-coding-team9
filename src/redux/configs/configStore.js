import { configureStore } from '@reduxjs/toolkit';

import login from '../Modules/loginSlice';

const store = configureStore({
  reducer: { login },
});

export default store;
