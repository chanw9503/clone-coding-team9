import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
