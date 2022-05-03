import { createSlice } from '@reduxjs/toolkit'

export const screenSlice = createSlice({
  name: 'user',

  initialState: {
    loggedIn: false,
    token: '',
  },

  reducers: {
    setToken: (state, args) => {
      state.loggedIn = true;
      state.token = args.token;
    },
    clearToken: (state) => {
      state.loggedIn = false;
      state.token = '';
    }
  },
})

export const { logIn, logOut } = screenSlice.actions

export default screenSlice.reducer
