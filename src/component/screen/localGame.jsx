import Game from './game';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLocalGame } from '../../state/gameSlice';

function LocalGame() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLocalGame());
  }, []);

  return <Game user={{ username: 'player1' }}
               opponent={{ username: 'player2' }}/>;
}

export default LocalGame;
