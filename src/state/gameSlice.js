import { createSlice } from '@reduxjs/toolkit'
import { Chess } from 'chess.js';

export const gameSlice = createSlice({
  name: 'game',

  initialState: {
    engine: null,
    type: '',
    side: '',
    pickedUp: null,
    highlighted: []
  },

  reducers: {
    startLocalGame(state) {
      state.engine = new Chess();
      state.type = 'local';
      state.side = 'w';
    },
    startOnlineGame(state, side) {
      state.engine = new Chess();
      state.type = 'online';
      state.side = side;
    },
    pickUp(state, square) {
      state.pickedUp = { square, ...state.engine.get(square)};
      state.highlighted = state.engine.moves({ square });
    },
    putDown(state, square) {
      const from = state.pickedUp.square;
      const to = square;
      if (state.engine.move({ from, to })) {
        state.pickedUp = null;
        state.highlighted = []
      }
    },
    makeMove(state, from, to) {
      state.engine.move({ from, to });
    },
  },
})

export const { startLocalGame, startOnlineGame, makeMove, pickUp, putDown } = gameSlice.actions

export default gameSlice.reducer
