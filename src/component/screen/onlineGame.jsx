import Game from './game';

import Stopwatch from "../stopwatch";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { apiclient, createWebSocket } from "../../utils/apiclient";
import { startOnlineGame, makeMove } from "../../state/gameSlice";

function Loading() {
  const screen = (
    <div className="flex h-screen justify-center items-center">
        <div className="flex-row">
            <div className="text-center mb-16 font-mono font-bold text-4xl">
                <Stopwatch/>
            </div>
            <div className="flex">
                <div className="w-20 h-20 border-t-4 border-b-4 bg-secondary-color rounded-full animate-bounce"></div>
                <div className="w-20 h-20 ml-10 mr-10 border-t-4 border-b-4 bg-main-color rounded-full animate-bounce"></div>
                <div className="w-20 h-20 border-t-4 border-b-4 bg-secondary-color rounded-full animate-bounce"></div>
            </div>
        </div>
    </div>
  );
  return screen;
}

function OnlineGame() {
  const [started, setStarted] = useState(false);

  const user = useSelector(state => state.user.info);
  const [opponent, setOpponent] = useState({ username: '' });

  const game = useSelector(state => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = createWebSocket();

    ws.onmessage = (event) => {
      console.log('MESSAGE: ' + JSON.stringify(event.data));

      const msg = event.data.split(' ');

      if (msg[0] === 'start') {
        if (started)
          console.warn('ALREADY STARTED BAD MESSAGE: ' + msg);

        setStarted(true);

        dispatch(startOnlineGame(msg[1] === 'first' ? 'w' : 'b'));

        if (msg[3] === 'computer') {
          setOpponent({ username: 'computer' });
        } else {
          // query api gateway for opponent
          setOpponent({ username: msg[3] });
        }

      } else if (msg[0] === 'move') {

        console.log('MOVE: ' + msg[1]);
        if (game.engine && game.engine.turn() != game.side) {
          console.log(msg.substr(0, 2)); // a2a4 -> to: a2 from: a4
          console.log(msg.substr(2, 2));
          dispatch(makeMove(msg.substr(0, 2), msg.substr(2, 2)));
        }

      } else {
        console.warn('BAD MESSAGE: ' + msg);
      }
    };
  }, []);

  if (!started)
    return <Loading/>

  return <Game user={user} opponent={opponent}/>
}

export default OnlineGame;
