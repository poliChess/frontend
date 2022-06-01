import React from "react";

import pieces from "../utils/pieces";

const all = ['p', 'n', 'b', 'r', 'q', 'k']

function Captures({ captures, color }) {
  const opp = color === 'w' ? 'b' : 'w';

  return (
    <div className="m-auto h-70 w-40 items-center justify-around flex flex-col
                    bg-decoration-bg rounded-xl shadow-2xl
                    border-white border-b-secondary-color border-t-secondary-color border-4">
    { 
      all.map((item) => (captures[opp][item] > 0) 
      ? <div key={(item, item)} className="flex justify-center content-center">
          <img src={pieces[opp][item]} height="50px" width="50px" />
          <div className="self-center font-['Helvetica'] flex items-center justify-between w-8">
            <span>X</span>
            <strong className="text-xl">{captures[opp][item]}</strong>
          </div>
        </div>
      : null
      )
    }
    </div>
  );
}

export default Captures;
