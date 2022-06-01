import { createSlice } from '@reduxjs/toolkit'
import { Chess } from 'chess.js';
import { thock1, thock2, thack } from '../utils/sounds';

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
      state.type = 'local';
      state.engine = new Chess();
      state.side = 'w';
      state.result = '';
      state.sendMove = () => null;
      state.pickedUp = '';
      state.highlighted = [];
    },

    startOnlineGame(state, { payload }) {
      state.type = 'online';
      state.engine = new Chess();
      state.side = payload.side;
      state.result = '';
      state.sendMove = payload.sendMove;
      state.pickedUp = '';
      state.highlighted = [];
    },

    pickUp(state, { payload }) {
      thock2.play();
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
        thock1.play();
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
      } else {
        thack.play();
      }
    },

    makeMove(state, { payload }) {
      state.highlighted = [];
      if (state.engine.move({ ...payload, promotion: 'q'}, { sloppy: true })) {
        thock1.play();
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
    },

    clearGameResult(state) {
      state.result = '';
    }
  },
})

export const { startLocalGame, startOnlineGame, makeMove, pickUp, putDown, setGameResult, clearGameResult } = gameSlice.actions

export default gameSlice.reducer
