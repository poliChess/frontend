import horse from "../../pictures/logos/horse.png";
import clock1 from "../../pictures/misc/clock1.png";
import clock2 from "../../pictures/misc/clock2.png";
import king from "../../pictures/avatars/avatar_king.png";
import bishop from "../../pictures/avatars/avatar_bishop.png";

import Timer from "../timer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Chessboard from "../board";
import Title from "../title";
import Captures from "../captures";
import Pieces from "../pieces";

function Game(user, opponent) {

  const golden = [{color: "b", type: "p", count: 1},
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

  const [p1Captures, setP1Captures] = useState({
    pawns: 0,
    knights: 0,
    bishops: 0,
    rooks: 0,
    queen: 0
  });

  const [p2Captures, setP2Captures] = useState({
    pawns: 0,
    knights: 0,
    bishops: 0,
    rooks: 0,
    queens: 0
  });

  const game = useSelector(state => state.game);

  const timer1 = game.engine ? game.engine.turn() === game.side : false;
  const timer2 = game.engine ? game.engine.turn() !== game.side : false;
  
  return (

    <div>

      <Title/>

      <div className="text-white text-right mt-4 mr-4">
        <button
          className="bg-button-2 hover:bg-purple-600 text-white w-24 h-6 
                     rounded-full shadow-lg hover:shadow-purple-600 shadow-button-2"
          >
          <strong className="text-md">Abandon</strong>
        </button>
      </div>

      <div className="flex">

        {/* COL 1 */}
        <div className="hidden md:flex flex-col flex-grow">

          {/* ROW 1.1 */}
          <div className="mt-24">
            <img
              className="m-auto"
              src={bishop}
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="text-center">
            Faraonu 1
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
                  src={timer1 ? clock1 : timer2 ? clock2 : null}
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
              Faraonu 1
            </div>

            {/* COL 2.2 */}
            <div className="w-1/2 text-center">
              Faraonu 2
            </div>
          </div>

          {/* ROW 3 */}
          {/* <div className="flex-grow content-center flex shrink-0 mt-10"> */}
          <div className="mt-10">
              <Chessboard game={{p1: [p1Captures, setP1Captures], p2: [p2Captures, setP2Captures]}}/>
          </div>
        </div>


        {/* COL 3 */}
        <div className="hidden md:flex flex-col flex-grow">
          
          {/* ROW 1.1 */}
          <div className="mt-24">
            <img
              className="m-auto"
              src={bishop}
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="text-center">
            Faraonu 2
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