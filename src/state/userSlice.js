import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    loggedIn: false,
    info: {},
    token: '',
  },

  reducers: {
    setToken: (state, args) => {
      state.loggedIn = true;
      state.info = args.user;
      state.token = args.token;
    },
    clearToken: (state) => {
      state.loggedIn = false;
      state.info = {};
      state.token = '';
    }
  },
})

export const { setToken, clearToken } = userSlice.actions

export default userSlice.reducer
