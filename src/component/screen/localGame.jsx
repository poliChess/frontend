import Game from './game';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLocalGame } from '../../state/gameSlice';

function LocalGame() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLocalGame());
  }, [dispatch]);

  return <Game user={{ username: 'white' }}
               opponent={{ username: 'black' }}/>;
}

export default LocalGame;
