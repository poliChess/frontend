import Game from './game';

import { useDispatch } from 'react-redux';
import { startLocalGame } from '../../state/gameSlice';

function LocalGame() {
    const dispatch = useDispatch();

    dispatch(startLocalGame());

    return Game({ username: 'player1' }, { username: 'player2' });
}

export default LocalGame;