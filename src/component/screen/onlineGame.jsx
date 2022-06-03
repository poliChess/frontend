import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import apiclient, { createWebSocket } from "../../utils/apiclient";
import { startOnlineGame, makeMove, setGameResult, clearGameResult } from "../../state/gameSlice";
import { setInfo } from '../../state/userSlice';

import Game from './game';
import Stopwatch from "../stopwatch";

function Loading() {
  const navigate = useNavigate();

  const screen = (
    <div className="flex h-screen justify-center items-center">
      <button
        className="fixed right-4 top-4 text-white px-4 py-1 rounded-full
                   hover:scale-110 bg-red-600 transition-all"
        onClick={() => navigate('/')}>
        Leave Queue
      </button>
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');

    const ws = createWebSocket();

    const sendMove = (move) => ws.send(`move ${move}`);

    ws.onmessage = (event) => {
      const msg = event.data.split(' ');

      if (msg[0] === 'start') {
        const side = msg[1] === 'first' ? 'w' : 'b';
        dispatch(startOnlineGame({ side, sendMove }));

        const username = event.data.substring(10 + msg[1].length);

        if (msg[3] === 'computer') {
          setOpponent({ username: 'computer', avatar: 'king1' });
        } else {
          apiclient.findUser({ username })
            .then(opp => setOpponent(opp))
            .catch(err => {
              console.warn(err);
              setOpponent({ username })
            });
        }

        setStarted(true);

      } else if (msg[0] === 'move') {
        const from = msg[1].substr(0, 2).toLowerCase();
        const to = msg[1].substr(2, 2).toLowerCase();
        dispatch(makeMove({ from, to }));

      } else if (msg[0] === 'result') {
        if (msg[1] === 'draw' || msg[1] === 'stalemate') {
          dispatch(setGameResult({ result: msg[1] }));
        } else {
          const loser = msg[2] === 'white' ? 'b' : 'w';
          dispatch(setGameResult({ result: 'lost ' + loser }));
        }

      } else {
        console.warn('BAD MESSAGE: ' + msg);
      }
    };

    return async () => {
      ws.close();
      dispatch(clearGameResult());
      setTimeout(() =>
        apiclient.me().then(
          (res) => dispatch(setInfo({ user: res }))
        ), 400
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!started)
    return <Loading/>

  return <Game user={user} opponent={opponent}/>
}

export default OnlineGame;
