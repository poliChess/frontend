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

import React from "react";

import { Chess } from 'chess.js'

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

class Chessboard extends React.Component {
  constructor() {
    super();
    this.chess = new Chess();
    this.positions = this.chess.board();
  }
  
  clickHandler(id, ev) {
    var move = null;
    console.log(id);
    return move
  }

  RenderPosition(color, position) {
    if (position) {
      var pieceIcon = letters2Icon[position.type + position.color];

      return (<td className={color} onClick={this.clickHandler.bind(null, position)}>
                {<img className="" src={pieceIcon}/>}
              </td>);
    }
    return (<td className={color} onClick={this.clickHandler.bind(null, position)}>
              </td>);
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
                  {this.RenderPosition('light', this.positions[0][0])}
                  {this.RenderPosition('dark', this.positions[0][1])}
                  {this.RenderPosition('light', this.positions[0][2])}
                  {this.RenderPosition('dark', this.positions[0][3])}
                  {this.RenderPosition('light', this.positions[0][4])}
                  {this.RenderPosition('dark', this.positions[0][5])}
                  {this.RenderPosition('light', this.positions[0][6])}
                  {this.RenderPosition('dark', this.positions[0][7])}
                  <th className="text-transparent">8</th>
                </tr>
                <tr>
                  <th>7</th>
                  {this.RenderPosition('dark', this.positions[1][0])}
                  {this.RenderPosition('light', this.positions[1][1])}
                  {this.RenderPosition('dark', this.positions[1][2])}
                  {this.RenderPosition('light', this.positions[1][3])}
                  {this.RenderPosition('dark', this.positions[1][4])}
                  {this.RenderPosition('light', this.positions[1][5])}
                  {this.RenderPosition('dark', this.positions[1][6])}
                  {this.RenderPosition('light', this.positions[1][7])}
                  <th>7</th>
                </tr>
                <tr>
                  <th>6</th>
                  {this.RenderPosition('light', this.positions[2][0])}
                  {this.RenderPosition('dark', this.positions[2][1])}
                  {this.RenderPosition('light', this.positions[2][2])}
                  {this.RenderPosition('dark', this.positions[2][3])}
                  {this.RenderPosition('light', this.positions[2][4])}
                  {this.RenderPosition('dark', this.positions[2][5])}
                  {this.RenderPosition('light', this.positions[2][6])}
                  {this.RenderPosition('dark', this.positions[2][7])}
                  <th>6</th>
                </tr>
                <tr>
                  <th>5</th>
                  {this.RenderPosition('dark', this.positions[3][0])}
                  {this.RenderPosition('light', this.positions[3][1])}
                  {this.RenderPosition('dark', this.positions[3][2])}
                  {this.RenderPosition('light', this.positions[3][3])}
                  {this.RenderPosition('dark', this.positions[3][4])}
                  {this.RenderPosition('light', this.positions[3][5])}
                  {this.RenderPosition('dark', this.positions[3][6])}
                  {this.RenderPosition('light', this.positions[3][7])}
                  <th>5</th>
                </tr>
                <tr>
                  <th>4</th>
                  {this.RenderPosition('light', this.positions[4][0])}
                  {this.RenderPosition('dark', this.positions[4][1])}
                  {this.RenderPosition('light', this.positions[4][2])}
                  {this.RenderPosition('dark', this.positions[4][3])}
                  {this.RenderPosition('light', this.positions[4][4])}
                  {this.RenderPosition('dark', this.positions[4][5])}
                  {this.RenderPosition('light', this.positions[4][6])}
                  {this.RenderPosition('dark', this.positions[4][7])}
                  <th>4</th>
                </tr>
                <tr>
                  <th>3</th>
                  {this.RenderPosition('dark', this.positions[5][0])}
                  {this.RenderPosition('light', this.positions[5][1])}
                  {this.RenderPosition('dark', this.positions[5][2])}
                  {this.RenderPosition('light', this.positions[5][3])}
                  {this.RenderPosition('dark', this.positions[5][4])}
                  {this.RenderPosition('light', this.positions[5][5])}
                  {this.RenderPosition('dark', this.positions[5][6])}
                  {this.RenderPosition('light', this.positions[5][7])}
                  <th>3</th>
                </tr>
                <tr>
                  <th>2</th>
                  {this.RenderPosition('light', this.positions[6][0])}
                  {this.RenderPosition('dark', this.positions[6][1])}
                  {this.RenderPosition('light', this.positions[6][2])}
                  {this.RenderPosition('dark', this.positions[6][3])}
                  {this.RenderPosition('light', this.positions[6][4])}
                  {this.RenderPosition('dark', this.positions[6][5])}
                  {this.RenderPosition('light', this.positions[6][6])}
                  {this.RenderPosition('dark', this.positions[6][7])}
                  <th>2</th>
                </tr>
                <tr>
                  <th>1</th>
                  {this.RenderPosition('dark', this.positions[7][0])}
                  {this.RenderPosition('light', this.positions[7][1])}
                  {this.RenderPosition('dark', this.positions[7][2])}
                  {this.RenderPosition('light', this.positions[7][3])}
                  {this.RenderPosition('dark', this.positions[7][4])}
                  {this.RenderPosition('light', this.positions[7][5])}
                  {this.RenderPosition('dark', this.positions[7][6])}
                  {this.RenderPosition('light', this.positions[7][7])}
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