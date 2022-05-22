import horse from "../pictures/logos/horse.png";
import clock1 from "../pictures/misc/clock1.png";
import clock2 from "../pictures/misc/clock2.png";
import king from "../pictures/avatars/avatar_king.png";
import bishop from "../pictures/avatars/avatar_bishop.png";

import black_pawn from "../pictures/pieces/black_pawn.png";
import black_rook from "../pictures/pieces/black_rook.png";
import black_knight from "../pictures/pieces/black_knight.png";
import black_bishop from "../pictures/pieces/black_bishop.png";
import black_queen from "../pictures/pieces/black_queen.png";
import black_king from "../pictures/pieces/black_king.png";

import white_pawn from "../pictures/pieces/white_pawn.png";
import white_rook from "../pictures/pieces/white_rook.png";
import white_knight from "../pictures/pieces/white_knight.png";
import white_bishop from "../pictures/pieces/white_bishop.png";  
import white_queen from "../pictures/pieces/white_queen.png";
import white_king from "../pictures/pieces/white_king.png";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pieces from "./pieces";




function Captures({golden, color}) {

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

//   const obj = props.golden[i]
//    console.log(props.golden[i])
//  console.log(props.golden.length)
//   for(i = 0; i < props.number; i++)
//     console.log(props.golden[i]);
 console.log(color)

return (
    <div className="flex-row items-center bg-white flex-grow rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-button-1 hover:shadow-purple-600 text-center">
      {golden.map((item) => (item.color === color) 
        ? (<div key={item.id} className="flex justify-center">
                <div>
                    <img
                        className=""
                        src={Pieces(item.color, item.type)}
                        height="50px"
                        width="50px"
                        border="1px"
                    />
                </div>
                <div className="self-center">
                    X {item.count}
                </div>
            </div>)
        : null
      )}
    </div>
  );
//  console.log(golden[0].count)

// const numbers = golden;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );

  return (
        
        <div className="flex-grow hidden md:flex items-center shrink-0">
          <div className="mr-11 bg-white flex-grow m-16 rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-button-1 hover:shadow-purple-600">
            <div className="bg-white flex items-center m-1">
              <div className="m-auto">
                <div className="flex items-center">
                  <img
                    className=""
                    src={black_pawn}
                    height="50px"
                    width="50px"
                    border="1px"
                  />
                <div className="text-center">X 1</div>
              </div>
            </div>
          </div>
            <div className="bg-white flex items-center m-1">
              <div className="m-auto">
                <div className="flex items-center">
                  <img
                    className=""
                    src={black_rook}
                    height="50px"
                    width="50px"
                    border="1px"
                  />
                  <div className="text-center">X 1</div>
                </div>
              </div>
            </div>
            <div className="bg-white flex items-center m-1">
              <div className="m-auto">
                <div className="flex items-center">
                  <img
                    className=""
                    src={black_knight}
                    height="50px"
                    width="50px"
                    border="1px"
                  />
                  <div className="text-center">X 1</div>
                </div>
              </div>
            </div>
            <div className="bg-white flex items-center m-1">
              <div className="m-auto">
                <div className="flex items-center">
                  <img
                    className=""
                    src={black_bishop}
                    height="50px"
                    width="50px"
                    border="1px"
                  />
                  <div className="text-center">X 1</div>
                </div>
              </div>
            </div>
            <div className="bg-white flex items-center m-1">
              <div className="m-auto">
                <div className="flex items-center">
                  <img
                    className=""
                    src={black_queen}
                    height="50px"
                    width="50px"
                    border="1px"
                  />
                  <div className="text-center">X 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  );
}

export default Captures;