import { useState } from 'react';

import horse_bg from "../pictures/backgrounds/horse_bg.png";
import king_bg from "../pictures/backgrounds/king_bg.png";
import pawn_bg from "../pictures/backgrounds/pawn_bg";
import rook_bg from "../pictures/backgrounds/rook_bg"
import pieces1_bg from "../pictures/backgrounds/pieces1_bg.png";
import pieces2_bg from "../pictures/backgrounds/pieces2_bg.png";

const images = [horse_bg, king_bg, pawn_bg, rook_bg, pieces1_bg, pieces2_bg];
const quotes = [
  '" Chess is the gymnasium of the mind. "',
  '" Chess is beautiful enough to waste your life for. "',
  '" Nobody ever won a chess game by resigning. "',
  '" I do not believe in psychology. I believe in good moves. "',
  '" Pawns are the soul of the game. "',
  '" Those who say they understand chess, understand nothing. "',
  '" One bad move nullifies forty good ones. "',
  '" When you see a good move, look for a better one. "',
  '" Every chess master was once a beginner. "',
  '" Chess makes men wiser and clear-sighted. "',
  '" Chess is the struggle against the error."'

];

function Decoration(screen) {
  const [index] = useState({
    image: Math.floor(Math.random() * images.length),
    quote: Math.floor(Math.random() * quotes.length)
  });

  return (
    <div className="flex bg-white">
      {screen}
      <div className="bg-decoration-bg flex-row flex-grow hidden md:flex basis-[40%]">
        <h1 className="bg-decoration-bg text-4xl w-96 m-20">
          {quotes[index.quote]}
        </h1>

        <img
          className="h-3/5 opacity-20"
          src={images[index.image]}
          alt="Horse background"
          style={{ position: "fixed", right: "-6em", bottom: "-6em" }}
        />
      </div>
    </div>
  );
}

export default Decoration;
