import black_pawn from "../pictures/pieces/black_pawn.svg";
import black_rook from "../pictures/pieces/black_rook.svg";
import black_knight from "../pictures/pieces/black_knight.svg";
import black_bishop from "../pictures/pieces/black_bishop.svg";
import black_queen from "../pictures/pieces/black_queen.svg";
import black_king from "../pictures/pieces/black_king.svg";

import white_pawn from "../pictures/pieces/white_pawn.svg";
import white_rook from "../pictures/pieces/white_rook.svg";
import white_knight from "../pictures/pieces/white_knight.svg";
import white_bishop from "../pictures/pieces/white_bishop.svg";
import white_queen from "../pictures/pieces/white_queen.svg";
import white_king from "../pictures/pieces/white_king.svg";

const pieces = {
  'w': {
    'p': white_pawn,
    'n': white_knight,
    'b': white_bishop,
    'r': white_rook,
    'q': white_queen,
    'k': white_king,
  },
  'b': {
    'p': black_pawn,
    'n': black_knight,
    'b': black_bishop,
    'r': black_rook,
    'q': black_queen,
    'k': black_king,
  }
}

export default pieces;
