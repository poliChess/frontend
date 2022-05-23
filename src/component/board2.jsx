import { useSelector } from 'react-redux';

import { pickUp, putDown } from '../state/gameSlice';
import { useDispatch } from 'react-redux';

import pieces from '../utils/pieces';

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
const emptyBoard = () => 
  [...Array(8).keys()].map(() => [...Array(8).keys()].map(() => null));

function Position({ square, piece, holding, canPick, color, dispatch }) {
  const handleClick = () => {
    console.log(`clicked ${square}!`);

    if (holding) {
      console.log('placing!');
      dispatch(putDown({ square }));
    } else if (canPick) {
      console.log('picking!');
      dispatch(pickUp({ square }));
    }
  }

  return (
    <div className={`w-16 h-16 p-0 m-0 ${color}`} onClick={handleClick}>
      { 
        piece 
          ? <img src={pieces[piece.color][piece.type]}
                 width="100%" className="m-auto"/> 
          : null
      }
    </div>
  );
}

function createSquare(game, turn, piece, rowIdx, colIdx, dispatch) {
  const square = files[colIdx] + ranks[rowIdx];

  const holding = game.pickedUp;

  let canPick = false;
  if (!holding && piece) {
    const goodPiece = piece && piece.color === turn;
    const myTurn = game.type === 'local' || turn === game.side;
    canPick = goodPiece && myTurn;
  }

  const highlight = game.highlighted.find(x => x === square) === square;

  const color = highlight || (holding && holding.square === square)
                  ? (rowIdx + colIdx) % 2 === 0
                    ? 'bg-board-white-highlight'
                    : 'bg-board-black-highlight'
                  : (rowIdx + colIdx) % 2 === 0
                    ? 'bg-board-white'
                    : 'bg-board-black';

  return (
    <th key={'thpr' + rowIdx + colIdx} className='p-0'>
      <Position square={square} 
                piece={piece} 
                holding={holding}
                canPick={canPick}
                color={color}
                dispatch={dispatch}/>
    </th>
  )
}

function Chessboard() {
  const game = useSelector(state => state.game);
  const dispatch = useDispatch();

  const board = game.engine ? game.engine.board() : emptyBoard();
  const turn = game.engine ? game.engine.turn() : 'w';

  return (
    <table className='m-auto rounded-xl bg-secondary-color text-white'>
      <tbody>
        <tr key='trp1'>
          <th key='thp1'/>
          { files.map(file => <th key={'thpf' + file} className="h-8">{file}</th>) }
          <th key='thp2'/>
        </tr>
        {
          board.map((row, rowIdx) => 
            <tr key={'trpr' + rowIdx}> 
              <th key={'thpr' + rowIdx} className="w-8"> { 8 - rowIdx} </th> 
              { 
                row.map((piece, colIdx) =>
                  createSquare(game, turn, piece, rowIdx, colIdx, dispatch)
                )
              }
              <th key={'thpre' + rowIdx} className="w-8"></th> 
            </tr>
          )
        }
        <tr key='trp2' className="h-8"><th key='thp3'/></tr>
      </tbody>
    </table>
  );
}

export default Chessboard;
