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
import { Board } from "./board";


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

export class Position extends React.Component{
  constructor(props) {
    super(props);
    this.color = this.props.color;
    this.position = this.props.position;
    console.log(`Loaded position: ${this.position}`);
    this.boardRef = this.props.boardRef;
  }
  
  render() {
    //highlight position
    this.highlight = this.boardRef.state.highlighted.find(arr => arr[0] === this.position[0] 
      && arr[1] === this.position[1]) !== undefined ? true : false;

    var position = this.boardRef.positions[this.position[0]][this.position[1]];
    if (position) {
      var pieceIcon = letters2Icon[position.type + position.color];

      console.log(this.highlight);
      return (<td className={ this.highlight === false ? this.color : 'bg-yellow-300'}
                  onClick={() => this.boardRef.occupiedPositionHandler(position)}>
                {<img className="" src={pieceIcon}/>}
              </td>);
    }
    return (<td className={this.highlight === false ? this.color : 'bg-yellow-300'}
                onClick={() => this.boardRef.emptyPositionHandler()}>
              </td>);
  }
}