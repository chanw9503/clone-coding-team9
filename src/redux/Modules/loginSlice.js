/**
 *
 * 작성자 : 박찬우
 * 목적 : slice 생성 쓸일이 있을까 싶긴함...
 * 날짜 : 2023.03.25
 *
 */

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
