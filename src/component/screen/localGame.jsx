import Game from './game';

function LocalGame() {
    return Game({ username: 'player1' }, { username: 'player2' });
}

export default LocalGame;