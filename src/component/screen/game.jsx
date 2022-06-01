import clock1 from "../../pictures/misc/clock1.png";
import clock2 from "../../pictures/misc/clock2.png";
import icon from "../../pictures/misc/win.png";

import Timer from "../timer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Chessboard from "../board";
import Title from "../title";
import Captures from "../captures";
import { getAvatar } from "../../utils/apiclient";

const allPieces = {
  'w': { 'p': 8, 'r': 2, 'n': 2, 'b': 2, 'q': 1, 'k': 1 }, 
  'b': { 'p': 8, 'r': 2, 'n': 2, 'b': 2, 'q': 1, 'k': 1 }
};

function Game({ user, opponent }) {
  const navigate = useNavigate();

  const game = useSelector(state => state.game);
  const [result, setResult] = useState({ message: '', color: '' });

  const runTimers = game.engine !== null && result.message === '';
  const timer1 = runTimers ? game.engine.turn() === game.side : false;
  const timer2 = runTimers ? game.engine.turn() !== game.side : false;

  useEffect(() => {
    if (game.result) {
      if (game.result === 'draw') {
        setResult({ message: 'Draw!', color: 'gray' });
      } else if (game.result === 'stalemate') {
        setResult({ message: 'Stalemate...', color: 'gray' });
      } else if (game.result.startsWith('lost')) {
        const loser = game.result[5];
        if (loser === game.side)
          setResult({ message: 'Defeat!', color: 'red' });
        else
          setResult({ message: 'Victory!', color: 'green' });
      }
    }
  }, [game.result, game.side]);

  let captures = structuredClone(allPieces);
  if (game.engine) {
    for (const line of game.engine.board())
      for (const piece of line)
        if (piece) captures[piece.color][piece.type] -= 1;
  }

  return (
    <div>
      <Title/>

      {
        <div className="absolute bg-secondary-color border-2 rounded-xl shadow-xl shadow-black
                        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity"
             style={{ borderColor: result.color, zIndex: result.message ? 10 : -10, opacity: result.message ? 0.96 : 0 }}>
          <div className="w-80 h-44 flex flex-col justify-around">
            <div className="text-center text-5xl text-white">{ result.message } </div>
            <button className="mx-auto block bg-white text-black px-4 py-0.5 rounded-full
                               hover:scale-105 transition-all hover:bg-decoration-bg"
                    onClick={() => navigate('/')}>
              Back
            </button>
          </div> 
        </div>
      }

      <div className="text-white text-right mt-4 mr-4">
        <button
          className="bg-secondary-color text-white px-4 py-1 rounded-full
                     hover:scale-110 hover:bg-red-600 transition-all"
          onClick={() => navigate('/')}
          >
          { game.type !== 'local' ? 'Abandon' : 'Exit' }
        </button>
      </div>

      <div className="flex">

        {/* COL 1 */}
        <div className="hidden md:flex flex-col flex-grow">

          {/* ROW 1.1 */}
          <div className="mt-24">
            <img
              className="m-auto"
              src={ getAvatar(user.avatar) }
              alt=""
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="text-center">
            { user.username }
          </div>

          {/* ROW 1.3 */}
          <div className="mt-48">
            <Captures captures={captures} color={'w'}/>
          </div>
        </div>


        {/* COL 2 */}
        <div className="bg-right-bg flex-row flex-grow">

          {/* ROW 1 */}
            <div className="flex mt-20">

              {/* COL 1.1 */}
              <div className="font-['Helvetica'] underline underline-offset-2 self-center text-right text-2xl text-button-1 w-2/5">
                <Timer running={timer1} onFinish={() => setResult({ message: 'Time ran out!', color: 'gray'})} />
              </div>

              {/* COL 1.2 */}
              <div className="self-center w-1/5">
                <img
                  className="m-auto"
                  src={ timer1 ? clock1 : clock2 }
                  alt='clock'
                  height="140px"
                  width="140px"
                  border="1px"
                />
              </div>

              {/* COL 1.3 */}
              <div className="font-['Helvetica'] underline underline-offset-2 self-center text-left text-2xl w-2/5">
                <Timer running={timer2} onFinish={() => setResult({ message: 'Time ran out!', color: 'gray'})}/>
              </div>
            </div>
          
          {/* ROW 2 */}
          <div className="flex md:hidden mt-10">

            {/* COL 2.1 */}
            <div className="w-1/2 text-center">
              { user.username }
            </div>

            {/* COL 2.2 */}
            <div className="w-1/2 text-center">
              { opponent.username }
            </div>
          </div>

          {/* ROW 3 */}
          <div className="mt-10">
              <Chessboard/>
          </div>
        </div>


        {/* COL 3 */}
        <div className="hidden md:flex flex-col flex-grow">
          
          {/* ROW 1.1 */}
          <div className="mt-24">
            <img
              className="m-auto"
              src={ getAvatar(opponent.avatar) }
              alt=""
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="text-center">
            { opponent.username }
          </div>

          {/* ROW 1.3 */}
          <div className="mt-48">
            <Captures captures={captures} color={'b'}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Game;
