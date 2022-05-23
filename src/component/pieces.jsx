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

function Pieces(color, type) {

    if(color === 'w' && type === 'p')
      return white_pawn;

    if(color === 'w' && type === 'n')
      return white_knight;
  
    if(color === 'w' && type === 'r')
      return white_rook;
  
    if(color === 'w' && type === 'k')
      return white_king;
  
    if(color === 'w' && type === 'b')
      return white_bishop;
  
    if(color === 'w' && type === 'q')
      return white_queen;
  
    if(color === 'b' && type === 'p')
      return black_pawn;

    if(color === 'b' && type === 'n')
      return black_knight;
  
    if(color === 'b' && type === 'r')
      return black_rook;
  
    if(color === 'b' && type === 'k')
      return black_king;
  
    if(color === 'b' && type === 'b')
      return black_bishop;
  
    if(color === 'b' && type === 'q')
      return black_queen;
}

export default Pieces;
