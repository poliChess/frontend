import { createSlice } from '@reduxjs/toolkit'
import { Chess } from 'chess.js';

export const gameSlice = createSlice({
  name: 'game',

  initialState: {
    type: '',
    engine: null,
    side: '',
    result: '',
    sendMove: () => null,
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
      state.sendMove = payload.sendMove;
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
      if (state.engine.move({ from, to, promotion: 'q' })) {
        state.sendMove(from + to);
        if (state.engine.game_over()) {
          if (state.engine.in_checkmate()) {
            const loser = state.engine.turn();
            state.result = 'lost ' + loser;
          }

          if (state.engine.in_draw())
            state.result = 'draw';

          if (state.engine.in_stalemate())
            state.result = 'stalemate';
        }
      }
    },

    makeMove(state, { payload }) {
      state.highlighted = [];
      if (state.engine.move(payload, { sloppy: true })) {
        if (state.engine.game_over()) {
          if (state.engine.in_checkmate()) {
            const loser = state.engine.turn();
            state.result = 'lost ' + loser;
          }

          if (state.engine.in_draw())
            state.result = 'draw';

          if (state.engine.in_stalemate())
            state.result = 'stalemate';
        }
      }
    },

    setGameResult(state, { payload }) {
      state.result = payload.result;
    }
  },
})

export const { startLocalGame, startOnlineGame, makeMove, pickUp, putDown } = gameSlice.actions

export default gameSlice.reducer
