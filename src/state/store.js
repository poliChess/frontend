import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import gameSlice from './gameSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
