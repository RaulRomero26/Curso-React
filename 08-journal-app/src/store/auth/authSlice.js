import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // checking, not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state,actions) => {

    },
    logout: (state, payload) => {
      state.status = 'not-authenticated', // checking, not-authenticated, authenticated
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = null;
    },
    checkingCredentials: (state) => {
        state.status = 'checking';
    }

  }
});

export const { login, logout, checkingCredentials } = authSlice.actions
