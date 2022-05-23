import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    loggedIn: false,
    guest: false,
    info: {},
    token: '',
  },

  reducers: {
    setGuest: (state) => {
      state.loggedIn = false;
      state.guest = true;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = true;
      state.guest = false;
      state.info = payload.user;
      state.token = payload.token;
    },
    setInfo: (state, { payload }) => {
      state.loggedIn = true;
      state.info = payload.user;
    },
    clear: (state) => {
      state.loggedIn = false;
      state.guest = false;
      state.info = {};
      state.token = '';
    }
  },
})

export const { setGuest, setLoggedIn, clear } = userSlice.actions

export default userSlice.reducer
