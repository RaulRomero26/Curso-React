import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'authenticated', 'not-authenticated',
    user: {},
    errrMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
        state.status = 'checking';
        state.user = {};
        errorMessage = undefined;
    },
    onLogin: (state,{payload}) => {
        state.status = 'authenticated';
        state.user = payload;
        errorMessage = undefined;
    } 
  }
});

export const { checking, onLogin } = authSlice.actions