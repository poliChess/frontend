import clock1 from "../../pictures/misc/clock1.png";
import clock2 from "../../pictures/misc/clock2.png";
import bishop from "../../pictures/avatars/avatar_bishop.png";

import Timer from "../timer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Chessboard from "../board2";
import Title from "../title";
import Captures from "../captures";

function Game({ user, opponent }) {

  const golden = [
    {color: "b", type: "p", count: 1},
    {color: "b", type: "r", count: 2},
    {color: "b", type: "k", count: 3},
    {color: "b", type: "b", count: 4},
    {color: "b", type: "q", count: 5},
    {color: "w", type: "p", count: 5},
    {color: "w", type: "r", count: 4},
    {color: "w", type: "k", count: 3},
    {color: "w", type: "b", count: 2},
    {color: "w", type: "q", count: 1}
  ]

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

  return (
    <div>
      <Title/>

      {
        result.message 
        ? <div className="absolute opacity-90 bg-gray-400 border-8 rounded-md
                          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
               style={{ borderColor: result.color }}>
            <div className="w-80 h-40 flex">
              <h1 className="m-auto block text-5xl text-black">{ result.message } </h1>
            </div> 
          </div>
        : null
      }

      <div className="text-white text-right mt-4 mr-4">
        <button
          className="bg-secondary-color text-white px-2 py-1 rounded-full
                     hover:scale-110 hover:bg-red-600 transition-all"
          >
          Abandon
        </button>
      </div>

      <div className="flex">

        {/* COL 1 */}
        <div className="hidden md:flex flex-col flex-grow">

          {/* ROW 1.1 */}
          <div className="mt-24">
            <img
              className="m-auto"
              alt={ user.username }
              src={bishop}
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
            <Captures golden={golden} color={'w'}/>
          </div>
        </div>


        {/* COL 2 */}
        <div className="bg-right-bg flex-row flex-grow">

          {/* ROW 1 */}
            <div className="flex mt-20">

              {/* COL 1.1 */}
              <div className="font-['Helvetica'] underline underline-offset-4 self-center text-right text-2xl text-button-1 w-2/5">
                <Timer running={timer1} />
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
              <div className="font-['Helvetica'] underline underline-offset-4 self-center text-left text-2xl w-2/5">
                <Timer running={timer2} />
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
              src={bishop}
              alt={ opponent.username }
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
            <Captures golden={golden} color={'b'}/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Game;
