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

import { Chess } from 'chess.js'
import React, { useState } from "react";
import { Position } from "./position";

const letters2Icon = {
  'pw': white_pawn,
  'kw': white_king,
  'nw': white_knight,
  'qw': white_queen,
  'rw': white_rook,
  'bw': white_bishop,
  'pb': black_pawn,
  'kb': black_king,
  'nb': black_knight,
  'qb': black_queen,
  'rb': black_rook,
  'bb': black_bishop,
}

const dark = 'dark';
const light = 'light';

export class Chessboard extends React.Component{ 

  constructor(props) {
    super(props);
    this.chess = new Chess();
    this.positions = this.chess.board();
    this.state = {
      selectedPiece: {highlight: false, position: null}
    };
  }

  emptyPositionHandler(position) {
    if (this.state.selectedPiece.highlight === true) {
      const x = 8 - parseInt(position.square[1]);
      const y = position.square[0].charCodeAt() - 'a'.charCodeAt();
      this.positions[x][y].highlight = false;
      this.setState({selectedPiece: {highlight: false, position: null}});
      console.log(`Position ${this.positions[x][y].square} highlight: ${this.positions[x][y].highlight}`);
    }
  }
  
  occupiedPositionHandler(position) {
    if (this.state.selectedPiece.highlight === false) {
      const x = 8 - parseInt(position.square[1]);
      const y = position.square[0].charCodeAt() - 'a'.charCodeAt();
      this.positions[x][y].highlight = true;
      this.setState({selectedPiece: {highlight: true, position: this.positions[x][y]}});
      console.log(`Position ${this.positions[x][y].square} highlight: ${this.positions[x][y].highlight}`);
    }
  }

  render() {
    return (<table className="chess-board m-auto shadow-2xl shadow-black hover:shadow-purple-600">
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
                    <Position color={light} position={this.positions[0][0]} boardRef={this}/>
                    <Position color={dark} position={this.positions[0][1]} boardRef={this}/>
                    <Position color={light} position={this.positions[0][2]} boardRef={this}/>
                    <Position color={dark} position={this.positions[0][3]} boardRef={this}/>
                    <Position color={light} position={this.positions[0][4]} boardRef={this}/>
                    <Position color={dark} position={this.positions[0][5]} boardRef={this}/>
                    <Position color={light} position={this.positions[0][6]} boardRef={this}/>
                    <Position color={dark} position={this.positions[0][7]} boardRef={this}/>
                  <th className="text-transparent">8</th>
                </tr>
                <tr>
                  <th>7</th>
                    <Position color={dark} position={this.positions[1][0]} boardRef={this}/>
                    <Position color={light} position={this.positions[1][1]} boardRef={this}/>
                    <Position color={dark} position={this.positions[1][2]} boardRef={this}/>
                    <Position color={light} position={this.positions[1][3]} boardRef={this}/>
                    <Position color={dark} position={this.positions[1][4]} boardRef={this}/>
                    <Position color={light} position={this.positions[1][5]} boardRef={this}/>
                    <Position color={dark} position={this.positions[1][6]} boardRef={this}/>
                    <Position color={light} position={this.positions[1][7]} boardRef={this}/>
                  <th>7</th>
                </tr>
                <tr>
                  <th>6</th>
                    <Position color={light} position={this.positions[2][0]} boardRef={this}/>
                    <Position color={dark} position={this.positions[2][1]} boardRef={this}/>
                    <Position color={light} position={this.positions[2][2]} boardRef={this}/>
                    <Position color={dark} position={this.positions[2][3]} boardRef={this}/>
                    <Position color={light} position={this.positions[2][4]} boardRef={this}/>
                    <Position color={dark} position={this.positions[2][5]} boardRef={this}/>
                    <Position color={light} position={this.positions[2][6]} boardRef={this}/>
                    <Position color={dark} position={this.positions[2][7]} boardRef={this}/>
                  <th>6</th>
                </tr>
                <tr>
                  <th>5</th>
                    <Position color={dark} position={this.positions[3][0]} boardRef={this}/>
                    <Position color={light} position={this.positions[3][1]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[3][2]}  boardRef={this}/>
                    <Position color={light} position={this.positions[3][3]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[3][4]}  boardRef={this}/>
                    <Position color={light} position={this.positions[3][5]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[3][6]}  boardRef={this}/>
                    <Position color={light} position={this.positions[3][7]}  boardRef={this}/>
                  <th>5</th>
                </tr>
                <tr>
                  <th>4</th>
                    <Position color={light} position={this.positions[4][0]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[4][1]}  boardRef={this}/>
                    <Position color={light} position={this.positions[4][2]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[4][3]}  boardRef={this}/>
                    <Position color={light} position={this.positions[4][4]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[4][5]}  boardRef={this}/>
                    <Position color={light} position={this.positions[4][6]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[4][7]}  boardRef={this}/>
                  <th>4</th>
                </tr>
                <tr>
                  <th>3</th>
                    <Position color={dark} position={this.positions[5][0]}  boardRef={this}/>
                    <Position color={light} position={this.positions[5][1]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[5][2]}  boardRef={this}/>
                    <Position color={light} position={this.positions[5][3]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[5][4]}  boardRef={this}/>
                    <Position color={light} position={this.positions[5][5]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[5][6]}  boardRef={this}/>
                    <Position color={light} position={this.positions[5][7]}  boardRef={this}/>
                  <th>3</th>
                </tr>
                <tr>
                  <th>2</th>
                    <Position color={light} position={this.positions[6][0]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[6][1]}  boardRef={this}/>
                    <Position color={light} position={this.positions[6][2]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[6][3]}  boardRef={this}/>
                    <Position color={light} position={this.positions[6][4]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[6][5]}  boardRef={this}/>
                    <Position color={light} position={this.positions[6][6]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[6][7]}  boardRef={this}/>
                  <th>2</th>
                </tr>
                <tr>
                  <th>1</th>
                  <Position color={dark} position={this.positions[7][0]}  boardRef={this}/>
                    <Position color={light} position={this.positions[7][1]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[7][2]}  boardRef={this}/>
                    <Position color={light} position={this.positions[7][3]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[7][4]}  boardRef={this}/>
                    <Position color={light} position={this.positions[7][5]}  boardRef={this}/>
                    <Position color={dark} position={this.positions[7][6]}  boardRef={this}/>
                    <Position color={light} position={this.positions[7][7]}  boardRef={this}/>
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
          );
  }
}

export default Chessboard;