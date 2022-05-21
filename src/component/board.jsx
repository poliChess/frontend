import { Chess } from 'chess.js';
import React from "react";
import {Position} from "./position.jsx";
import {sanToIndex, highlightedPosition, indexToSAN } from '../utils/chessUtils.js';
const dark = 'dark';
const light = 'light';

export class Chessboard extends React.Component{ 
  constructor(props) {
    super(props);
    this.game = this.props.game;
    this.chess = new Chess();
    this.state = {
      positions: this.chess.board(),
      selectedPiece: {position: null},
      highlighted: []};
  }

  capturePiece(move) {
    const setP1Captures = this.game.p1[1];
    if (move.captured !== undefined) {
      if (move.captured === 'p') {
        setP1Captures({ pawns: this.game.p1.p1Captures++ });        
      }
    }
  }

  emptyPositionHandler(position) {
    if (this.state.selectedPiece.position) {
      this.chess.move({ 
        from: indexToSAN(sanToIndex(this.state.selectedPiece.position.square)),
        to: indexToSAN(position)
      });

      this.setState({
        positions: this.chess.board(),
        selectedPiece: { position: null },
        highlighted: []
      });
    }
  }
  
  occupiedPositionHandler(position) {
    if (this.state.selectedPiece.position === null) {
      var highlighted = [];
      const indexes = sanToIndex(position.square);
      highlighted.push(indexes);

      var validMoves = this.chess.moves({square: position.square});
      console.log(validMoves);

      //highlight all moves
      validMoves.forEach(position => {
        highlighted.push(sanToIndex(position));
      })

      this.setState({
        selectedPiece: { position: this.state.positions[indexes[0]][indexes[1]] },
        highlighted: highlighted
      });
    } else {
      const move = this.chess.move({
        from: indexToSAN(sanToIndex(this.state.selectedPiece.position.square)),
        to: indexToSAN(sanToIndex(position.square))
      });

      this.capturePiece(move);
      
      this.setState({
        positions: this.chess.board(),
        selectedPiece: { position: null },
        highlighted: []
      });
    }
  }

  render() {
    console.log(this.state);
    console.log(this.game.state);
    return (
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
              <Position color={light} position={[0,0]} boardRef={this}/>
              <Position color={dark} position={[0,1]} boardRef={this}/>
              <Position color={light} position={[0,2]} boardRef={this}/>
              <Position color={dark} position={[0,3]} boardRef={this}/>
              <Position color={light} position={[0,4]} boardRef={this}/>
              <Position color={dark} position={[0,5]} boardRef={this}/>
              <Position color={light} position={[0,6]} boardRef={this}/>
              <Position color={dark} position={[0,7]} boardRef={this}/>
            <th className="text-transparent">8</th>
          </tr>
          <tr>
            <th>7</th>
              <Position color={dark} position={[1,0]} boardRef={this}/>
              <Position color={light} position={[1,1]} boardRef={this}/>
              <Position color={dark} position={[1,2]} boardRef={this}/>
              <Position color={light} position={[1,3]} boardRef={this}/>
              <Position color={dark} position={[1,4]} boardRef={this}/>
              <Position color={light} position={[1,5]} boardRef={this}/>
              <Position color={dark} position={[1,6]} boardRef={this}/>
              <Position color={light} position={[1,7]} boardRef={this}/>
            <th>7</th>
          </tr>
          <tr>
            <th>6</th>
              <Position color={light} position={[2,0]} boardRef={this}/>
              <Position color={dark} position={[2,1]} boardRef={this}/>
              <Position color={light} position={[2,2]} boardRef={this}/>
              <Position color={dark} position={[2,3]} boardRef={this}/>
              <Position color={light} position={[2,4]} boardRef={this}/>
              <Position color={dark} position={[2,5]} boardRef={this}/>
              <Position color={light} position={[2,6]} boardRef={this}/>
              <Position color={dark} position={[2,7]} boardRef={this}/>
            <th>6</th>
          </tr>
          <tr>
            <th>5</th>
              <Position color={dark} position={[3,0]} boardRef={this}/>
              <Position color={light} position={[3,1]}  boardRef={this}/>
              <Position color={dark} position={[3,2]}  boardRef={this}/>
              <Position color={light} position={[3,3]}  boardRef={this}/>
              <Position color={dark} position={[3,4]}  boardRef={this}/>
              <Position color={light} position={[3,5]}  boardRef={this}/>
              <Position color={dark} position={[3,6]}  boardRef={this}/>
              <Position color={light} position={[3,7]}  boardRef={this}/>
            <th>5</th>
          </tr>
          <tr>
            <th>4</th>
              <Position color={light} position={[4,0]}  boardRef={this}/>
              <Position color={dark} position={[4,1]}  boardRef={this}/>
              <Position color={light} position={[4,2]}  boardRef={this}/>
              <Position color={dark} position={[4,3]}  boardRef={this}/>
              <Position color={light} position={[4,4]}  boardRef={this}/>
              <Position color={dark} position={[4,5]}  boardRef={this}/>
              <Position color={light} position={[4,6]}  boardRef={this}/>
              <Position color={dark} position={[4,7]}  boardRef={this}/>
            <th>4</th>
          </tr>
          <tr>
            <th>3</th>
              <Position color={dark} position={[5,0]}  boardRef={this}/>
              <Position color={light} position={[5,1]}  boardRef={this}/>
              <Position color={dark} position={[5,2]}  boardRef={this}/>
              <Position color={light} position={[5,3]}  boardRef={this}/>
              <Position color={dark} position={[5,4]}  boardRef={this}/>
              <Position color={light} position={[5,5]}  boardRef={this}/>
              <Position color={dark} position={[5,6]}  boardRef={this}/>
              <Position color={light} position={[5,7]}  boardRef={this}/>
            <th>3</th>
          </tr>
          <tr>
            <th>2</th>
              <Position color={light} position={[6,0]}  boardRef={this}/>
              <Position color={dark} position={[6,1]}  boardRef={this}/>
              <Position color={light} position={[6,2]}  boardRef={this}/>
              <Position color={dark} position={[6,3]}  boardRef={this}/>
              <Position color={light} position={[6,4]}  boardRef={this}/>
              <Position color={dark} position={[6,5]}  boardRef={this}/>
              <Position color={light} position={[6,6]}  boardRef={this}/>
              <Position color={dark} position={[6,7]}  boardRef={this}/>
            <th>2</th>
          </tr>
          <tr>
            <th>1</th>
              <Position color={dark} position={[7,0]}  boardRef={this}/>
              <Position color={light} position={[7,1]}  boardRef={this}/>
              <Position color={dark} position={[7,2]}  boardRef={this}/>
              <Position color={light} position={[7,3]}  boardRef={this}/>
              <Position color={dark} position={[7,4]}  boardRef={this}/>
              <Position color={light} position={[7,5]}  boardRef={this}/>
              <Position color={dark} position={[7,6]}  boardRef={this}/>
              <Position color={light} position={[7,7]}  boardRef={this}/>
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
