import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../axios/api";

export const __signUpUser = createAsyncThunk(
    "signUpUsers",
    async (payload, thunkAPI) => {
        try {
            await instance.post("/signup", payload);
            return thunkAPI.fulfillWithValue(payload);
        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    users: [],
    error: null,
    isLogin: false,
};

export const signUpSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        //signupUser
        [__signUpUser.pending]: (state) => {
            state.isLogin = true;
        },
        [__signUpUser.fulfilled]: (state, action) => {
            state.isLogin = [...state.users, action.payload]
            state.users = action.payload;
        },
        [__signUpUser.rejected]: (state, action) => {
            state.isLogin = false;
            state.error = action.payload;
        },
    }
})

export default signUpSlice.reducer