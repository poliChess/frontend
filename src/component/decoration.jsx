import { useState } from 'react';

import horse_bg from "../pictures/backgrounds/horse_bg.png";
import king_bg from "../pictures/backgrounds/king_bg.png";
import pieces1_bg from "../pictures/backgrounds/pieces1_bg.png";
import pieces2_bg from "../pictures/backgrounds/pieces2_bg.png";

const images = [horse_bg, king_bg, pieces1_bg, pieces2_bg];
const quotes = [
  '" Chess is the gymnasium of the mind "',
  '" Chess is beautiful enough to waste your life for "',
  '" Nobody ever won a chess game by resigning "',
];

function Decoration(screen) {
  const [index, setIndex] = useState({
    image: Math.floor(Math.random() * images.length),
    quote: Math.floor(Math.random() * quotes.length)
  });

  return (
    <div className="flex bg-white">
      {screen}
      <div className="bg-decoration-bg flex-row flex-grow hidden md:flex basis-[40%]">
        <div>
          <div className="bg-decoration-bg text-4xl w-72 ml-20 mt-20">
            {quotes[index.quote]}
          </div>

          <div className="opacity-20">
            <img
              className="h-3/5"
              src={images[index.image]}
              alt="Horse background"
              style={{ position: "fixed", right: "-6em", bottom: "-6em" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decoration;
