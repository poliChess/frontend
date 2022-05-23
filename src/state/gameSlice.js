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
    startOnlineGame(state, { payload }) {
      state.engine = new Chess();
      state.type = 'online';
      state.side = payload.side;
    },
    pickUp(state, { payload }) {
      const square = payload.square;
      state.pickedUp = { square, ...state.engine.get(square)};
      const moves = state.engine.moves({ square, verbose: true });
      state.highlighted = moves.map(move => move.to);
    },
    putDown(state, { payload }) {
      const from = state.pickedUp.square;
      const to = payload.square;
      state.pickedUp = null;
      state.highlighted = [];
      state.engine.move({ from, to })
    },
    makeMove(state, { payload }) {
      state.engine.move({ from: payload.from, to: payload.to });
    },
  },
})

export const { startLocalGame, startOnlineGame, makeMove, pickUp, putDown } = gameSlice.actions

export default gameSlice.reducer
