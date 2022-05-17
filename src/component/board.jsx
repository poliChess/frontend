import { Chess } from 'chess.js'
import React, { useState } from "react";
import {Position} from "./position.jsx"

const dark = 'dark';
const light = 'light';

export class Chessboard extends React.Component{ 

  constructor(props) {
    super(props);
    this.chess = new Chess();
    this.positions = this.chess.board();
    this.state = {
      selectedPiece: {position: null},
      highlighted: []
    };
  }



  emptyPositionHandler() {
    console.log('empty');
    console.log(this.state);
    if (this.state.selectedPiece.position) {
      this.setState({selectedPiece: {position: null},
                      highlighted: []              
      });
    }
  }
  
  occupiedPositionHandler(position) {
    if (this.state.selectedPiece.position === null) {
      var highlighted = [];
      const x = 8 - parseInt(position.square[1]);
      const y = position.square[0].charCodeAt() - 'a'.charCodeAt();
      highlighted.push([x,y]);
      //console.log(`Position ${this.positions[x][y].square} highlight: ${this.positions[x][y].highlight}`);

      var validMoves = this.chess.moves({square: position.square});

      //highlight all moves
      validMoves.forEach(position => {
        const x = 8 - parseInt(position[1]);
        const y = position[0].charCodeAt() - 'a'.charCodeAt();
        highlighted.push([x,y]);
      })

      this.setState({selectedPiece: {position: this.positions[x][y]},
                    highlighted: highlighted});
      console.log(this.state);
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