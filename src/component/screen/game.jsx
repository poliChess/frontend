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

  // return (
    
  //   <div className="bg-right-bg flex-row">

  //     <Title/>

  //     <div className="flex justify-between">
  //       <div className="flex-grow flex-shrink-0 hidden md:flex">
  //         <div className="mt-20 ml-4">
  //           <img
  //             className="m-auto"
  //             src={bishop}
  //             height="100px"
  //             width="100px"
  //             border="1px"
  //           />
  //         </div>

  //         <div className="text-center font-mono ml-4">{user.username}</div>
  //       </div>

  //       <div className="flex flex-grow ml-44 mr-44 flex-shrink-0">
  //         <div className="font-['Helvetica'] underline underline-offset-4 flex-grow self-center text-center text-2xl text-button-1">
  //           <Timer running={timer1} />
  //         </div>

  //         <div className="flex-grow ml-10 mr-10 self-center">
  //           <img
  //             className="m-auto"
  //             src={timer1 ? clock1 : timer2 ? clock2 : null}
  //             height="140px"
  //             width="140px"
  //             border="1px"
  //           />
  //         </div>

  //         <div className="font-['Helvetica'] underline underline-offset-4 flex-grow self-center text-center text-2xl text-red-600">
  //           <Timer running={timer2} />
  //         </div>
  //       </div>

  //       <div className="flex-grow flex-shrink-0 hidden md:flex">
  //         <div className="text-white text-right mt-4 mr-4">
  //             <button
  //               className="bg-button-2 hover:bg-purple-600 text-white w-24 h-6 
  //                           rounded-full shadow-lg hover:shadow-purple-600 shadow-button-2"
  //             >
  //               <strong className="text-md">Abandon</strong>
  //             </button>
  //         </div>

  //         <div className="mt-20 mr-4">
  //           <img
  //             className="m-auto"
  //             src={king}
  //             height="100px"
  //             width="100px"
  //             border="1px"
  //           />
  //         </div>

  //         <div className="text-center font-mono mr-4">{opponent.username}</div>
  //       </div>
  //     </div>

  //     <div className="flex mt-5">
  //       <div className="flex-grow hidden md:flex items-center shrink-0">
  //         <div className="mr-11 bg-white flex-grow m-16 rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-button-1 hover:shadow-purple-600">
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <img
  //                   className=""
  //                   src={black_pawn}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //                 <div className="text-center">X {p1Captures.pawns}</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <img
  //                   className=""
  //                   src={black_rook}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //                 <div className="text-center">X {p1Captures.rooks}</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <img
  //                   className=""
  //                   src={black_knight}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //                 <div className="text-center">X {p1Captures.knights}</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <img
  //                   className=""
  //                   src={black_bishop}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //                 <div className="text-center">X {p1Captures.bishops}</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <img
  //                   className=""
  //                   src={black_queen}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //                 <div className="text-center">X {p1Captures.queen}</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="flex-grow content-center flex shrink-0">
  //         <Chessboard game={{p1: [p1Captures, setP1Captures], p2: [p2Captures, setP2Captures]}}/>
  //       </div>

  //       <div className="flex-grow hidden md:flex items-center shrink-0">
  //         <div className="ml-11 bg-white flex-grow m-16 rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-red-600 hover:shadow-purple-600">
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <div className="text-center">{p2Captures.pawns} X</div>
  //                 <img
  //                   className=""
  //                   src={white_pawn}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <div className="text-center">{p2Captures.rooks} X</div>
  //                 <img
  //                   className=""
  //                   src={white_rook}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <div className="text-center">{p2Captures.knights} X</div>
  //                 <img
  //                   className=""
  //                   src={white_knight}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <div className="text-center">{p2Captures.bishops} X</div>
  //                 <img
  //                   className=""
  //                   src={white_bishop}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="bg-white flex items-center m-1">
  //             <div className="m-auto">
  //               <div className="flex items-center">
  //                 <div className="text-center">{p2Captures.queens} X</div>
  //                 <img
  //                   className=""
  //                   src={white_queen}
  //                   height="50px"
  //                   width="50px"
  //                   border="1px"
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  
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
        <div className="bg-red-600 hidden md:flex flex-col flex-grow">

          {/* ROW 1.1 */}
          <div className="bg-orange-600 mt-24">
            <img
              className="m-auto"
              src={bishop}
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="bg-pink-600 text-center">
            Faraonu 1
          </div>

          {/* ROW 1.3 */}
          <div className="bg-purple-600 mt-48">
            <Captures golden={golden} color={'w'}/>
          </div>
        </div>


        {/* COL 2 */}
        <div className="bg-right-bg flex-row flex-grow">

          {/* ROW 1 */}
            <div className="flex mt-20">

              {/* COL 1.1 */}
              <div className="bg-red-600 font-['Helvetica'] underline underline-offset-4 self-center text-right text-2xl text-button-1 w-2/5">
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
              <div className="font-['Helvetica'] underline underline-offset-4 self-center text-left text-2xl text-red-600 w-2/5">
                <Timer running={timer2} />
              </div>
            </div>
          
          {/* ROW 2 */}
          <div className="flex md:hidden mt-10">

            {/* COL 2.1 */}
            <div className="w-1/2 bg-blue-600 text-center">
              Faraonu 1
            </div>

            {/* COL 2.2 */}
            <div className="w-1/2 bg-green-600 text-center">
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
        <div className="bg-blue-600 hidden md:flex flex-col flex-grow">
          
          {/* ROW 1.1 */}
          <div className="bg-orange-600 mt-24">
            <img
              className="m-auto"
              src={bishop}
              height="100px"
              width="100px"
              border="1px"
            />
          </div>
          
          {/* ROW 1.2 */}
          <div className="bg-pink-600 text-center">
            Faraonu 2
          </div>

          {/* ROW 1.3 */}
          <div className="bg-purple-600 mt-48">
            <Captures golden={golden} color={'b'}/>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Game;