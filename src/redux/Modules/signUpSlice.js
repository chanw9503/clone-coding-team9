import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    nickName : "",
    password : "",
    confirm : "",
    userEmail: "",
};

export const signUpSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default signUpSlice.reducer