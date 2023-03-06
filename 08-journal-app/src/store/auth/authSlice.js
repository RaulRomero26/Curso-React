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

    },
    checkingCredentials: (state) => {

    }

  }
});

export const { login, logout, checkingCredentials } = authSlice.actions
