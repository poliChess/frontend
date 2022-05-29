import Game from './game';

import Stopwatch from "../stopwatch";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import apiclient, { createWebSocket } from "../../utils/apiclient";
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

  const dispatch = useDispatch();

  useEffect(() => {
    const ws = createWebSocket();

    const sendMove = (move) => ws.send(`move ${move}`);

    ws.onmessage = (event) => {
      const msg = event.data.split(' ');

      if (msg[0] === 'start') {
        if (started)
          console.warn('ALREADY STARTED BAD MESSAGE: ' + msg);

        setStarted(true);

        const side = msg[1] === 'first' ? 'w' : 'b';
        dispatch(startOnlineGame({ side, sendMove }));

        const username = event.data.substring(10 + msg[1].length);

        if (msg[3] === 'computer') {
          setOpponent({ username: 'computer' });
        } else {
          const opponentPromise = apiclient.findUser({ username });
          opponentPromise
            .then(opp => setOpponent(opp))
            .catch(err => {
              console.warn(err);
              setOpponent({ username })
            });
        }

      } else if (msg[0] === 'move') {

        const from = msg[1].substr(0, 2).toLowerCase();
        const to = msg[1].substr(2, 2).toLowerCase();
        dispatch(makeMove({ from, to }));

      } else {
        console.warn('BAD MESSAGE: ' + msg);
      }
    };
  });

  if (!started)
    return <Loading/>

  return <Game user={user} opponent={opponent}/>
}

export default OnlineGame;
