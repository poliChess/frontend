import Game from './game';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearGameResult, startLocalGame } from '../../state/gameSlice';

function LocalGame() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLocalGame());
    return () => dispatch(clearGameResult());
  }, [dispatch]);

  return <Game user={{ username: 'white', avatar: 'bishop1' }}
           opponent={{ username: 'black', avatar: 'knight1' }}/>;
}

export default LocalGame;
