import horse from "../horse.png"
import clock1 from "../clock1.png"
import clock2 from "../clock2.png"
import king from "../avatar_king.png"
import bishop from "../avatar_bishop.png"

import black_pawn from "../black_pawn.png"
import black_rook from "../black_rook.png"
import black_knight from "../black_knight.png"
import black_bishop from "../black_bishop.png"
import black_queen from "../black_queen.png"
import black_king from "../black_king.png"

import white_pawn from "../white_pawn.png"
import white_rook from "../white_rook.png"
import white_knight from "../white_knight.png"
import white_bishop from "../white_bishop.png"
import white_queen from "../white_queen.png"
import white_king from "../white_king.png"

import { Link } from "react-router-dom";

function Game() {

    return (

        <div className="bg-right-bg flex-row">

            {/* TODO
                    Change pieces. Black piece has different offset than the white piece.
            */}

            <div className="flex justify-between">

                <div className="flex-grow flex-shrink-0">

                    <div className="mt-4 ml-4 h-6">
                        <div>
                            <div style={{float: "left"}}><img src={horse} height="20px" width="20px" border="1px"/></div>
                            Poli<strong>Chess</strong>
                        </div>
                    </div>

                    <div className="mt-20 ml-4">
                            <img className="m-auto" src={bishop} height="100px" width="100px" border="1px"/>
                    </div>

                    <div className="text-center font-mono ml-4">
                        Player_1
                    </div>
                        
                </div>

                <div className="flex flex-grow ml-44 mr-44 flex-shrink-0">

                    <div className="font-['Helvetica'] underline underline-offset-4 flex-grow self-center text-center text-2xl text-button-1">
                        <strong>03:59</strong>
                    </div>

                    <div className="flex-grow ml-10 mr-10 self-center">
                            <img className="m-auto" src={clock1} height="140px" width="140px" border="1px"/>
                    </div>

                    <div className="font-['Helvetica'] underline underline-offset-4 flex-grow self-center text-center text-2xl text-red-600">
                        <strong>04:15</strong>
                    </div>
                </div>

                <div className="flex-grow flex-shrink-0">
                        
                    <div className="text-white text-right mt-4 mr-4">
                        <Link to="/">
                            <button className="bg-button-2 hover:bg-purple-600 text-white w-24 h-6 
                            rounded-full shadow-lg hover:shadow-purple-600 shadow-button-2">
                                <strong className="text-md">Abandon</strong>
                            </button>
                        </Link>
                    </div>

                    <div className="mt-20 mr-4">
                            <img className="m-auto" src={king} height="100px" width="100px" border="1px"/>
                    </div>

                    <div className="text-center font-mono mr-4">
                            Player_2
                    </div>
                        
                </div>

                
            </div>

            <div className="flex mt-5">

                <div className="flex-grow flex items-center shrink-0">
                    
                    <div className="mr-11 bg-white flex-grow m-16 rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-button-1 hover:shadow-purple-600">

                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">

                                <div className="flex items-center">
                                    <img className="" src={black_pawn} height="50px" width="50px" border="1px"/>
                                    <div className="text-center">
                                        X 0
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div className="bg-white flex items-center m-1">

                            <div className="m-auto">

                                <div className="flex items-center">
                                    <img className="" src={black_rook} height="50px" width="50px" border="1px"/>
                                    <div className="text-center">
                                        X 0
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div className="bg-white flex items-center m-1">

                            <div className="m-auto">

                                <div className="flex items-center">
                                    <img className="" src={black_knight} height="50px" width="50px" border="1px"/>
                                    <div className="text-center">
                                        X 0
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div className="bg-white flex items-center m-1">

                            <div className="m-auto">

                                <div className="flex items-center">
                                    <img className="" src={black_bishop} height="50px" width="50px" border="1px"/>
                                    <div className="text-center">
                                        X 0
                                    </div>
                                </div>
                            </div>

                            </div>
                            <div className="bg-white flex items-center m-1">

                            <div className="m-auto">

                                <div className="flex items-center">
                                    <img className="" src={black_queen} height="50px" width="50px" border="1px"/>
                                    <div className="text-center">
                                        X 0
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex-grow content-center flex shrink-0">
                    <table className="chess-board m-auto shadow-2xl shadow-black hover:shadow-purple-600">
                        <tbody>
                            <tr>
                                <th></th>
                                <th>a</th>
                                <th>b</th>
                                <th>c</th>
                                <th>d</th>
                                <th>e</th>
                                <th>f</th>
                                <th>g</th>
                                <th>h</th>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td className="light">
                                    <img className="" src={black_rook}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_knight}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_bishop}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_queen}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_king}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_bishop}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_knight}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_rook}/>
                                </td>
                                <th className="text-transparent">8</th>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td className="dark">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={black_pawn}/>
                                </td>
                                <th>7</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <th>6</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <th>5</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <th>4</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <td className="dark"></td>
                                <td className="light"></td>
                                <th>3</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td className="light">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_pawn}/>
                                </td>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>1</th>
                                <td className="dark">
                                    <img className="" src={white_rook}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_knight}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_bishop}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_queen}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_king}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_bishop}/>
                                </td>
                                <td className="dark">
                                    <img className="" src={white_knight}/>
                                </td>
                                <td className="light">
                                    <img className="" src={white_rook}/>
                                </td>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>a</th>
                                <th>b</th>
                                <th>c</th>
                                <th>d</th>
                                <th>e</th>
                                <th>f</th>
                                <th>g</th>
                                <th>h</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex-grow flex items-center shrink-0">
                    
                    <div className="ml-11 bg-white flex-grow m-16 rounded-2xl border-b-black border-t-black border-4 shadow-xl shadow-red-600 hover:shadow-purple-600">

                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">
                            
                                <div className="flex items-center">
                                    <div className="text-center">
                                        0 X
                                    </div>
                                    <img className="" src={black_pawn} height="50px" width="50px" border="1px"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">
                            
                                <div className="flex items-center">
                                    <div className="text-center">
                                        0 X
                                    </div>
                                    <img className="" src={black_rook} height="50px" width="50px" border="1px"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">
                            
                                <div className="flex items-center">
                                    <div className="text-center">
                                        0 X
                                    </div>
                                    <img className="" src={black_knight} height="50px" width="50px" border="1px"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">
                            
                                <div className="flex items-center">
                                    <div className="text-center">
                                        0 X
                                    </div>
                                    <img className="" src={black_bishop} height="50px" width="50px" border="1px"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-white flex items-center m-1">

                            <div className="m-auto">
                            
                                <div className="flex items-center">
                                    <div className="text-center">
                                        0 X
                                    </div>
                                    <img className="" src={black_queen} height="50px" width="50px" border="1px"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>

            {/* <div className="bg-black flex-grow">
                sdasdsa
            </div> */}

        </div>
    );
}

export default Game;