import win from "../pictures/misc/win.png";
import loss from "../pictures/misc/loss.png";
import draw from "../pictures/misc/rook_bg.png";

import { useNavigate, generatePath } from 'react-router-dom';

function Match(time, enemy, result, key, navigate) {
  let style = "";
  let pic = null; 

  if (result === "Victory") {
    style = "bg-green-600 flex";
    pic = win;
  }

  if (result === "Defeat") {
    style = "bg-red-800 flex"
    pic = loss;
  }

  if (result === "Draw") {
    style = "bg-slate-500 flex"
    pic = draw;
  }

  return (
    <div key={key} className={style}>
      <div className="w-1/3 text-center self-center text-white text-xl font-mono">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      <div className="w-1/3">
        <img className="mx-auto my-2" src={pic} alt={result} height="80px" width="80px"/>
      </div>

      {
        enemy === 'Computer'
          ? <div className="w-1/3 text-center self-center text-white text-xl font-mono">
              { enemy }
            </div>

          : <button className="w-1/3 text-center self-center text-white text-xl font-mono hover:underline"
              onClick={() => navigate(generatePath('/profile/:id', { id: enemy }))}>
              { enemy }
            </button>
      }
    </div>
  );
}

function Matches({ user }) {
  const navigate = useNavigate();

  if (!user.history)
    return null;

  return (
    <div className="bg-decoration-bg h-96 flex-row overflow-y-scroll flex-shrink-0 border-4 border-decoration-bg scrollbar-hide">
      { user.history.map((item, index) => {
        const time = new Date(item.finishedAt).getTime() - new Date(item.startedAt).getTime();

        if (item.type === "COMPUTER") {
          if (item.winner === "WHITE")
            return Match(time, "Computer", "Victory", index, navigate);

          if (item.winner === "BLACK")
            return Match(time, "Computer", "Defeat", index, navigate);

          if (item.winner === "DRAW")
            return Match(time, "Computer", "Draw", index, navigate);
        }

        if (item.type === "NORMAL") {
          if (item.player1.username === user.username && item.winner === "WHITE")
            return Match(time, item.player2.username, "Victory", index, navigate);

          if (item.player1.username === user.username && item.winner === "BLACK")
            return Match(time, item.player2.username, "Defeat", index, navigate);

          if (item.player1.username === user.username && item.winner === "DRAW")
            return Match(time, item.player2.username, "Draw", index, navigate);


          if (item.player2.username === user.username && item.winner === "WHITE")
            return Match(time, item.player1.username, "Defeat", index, navigate);

          if (item.player2.username === user.username && item.winner === "BLACK")
            return Match(time, item.player1.username, "Victory", index, navigate);

          if (item.player2.username === user.username && item.winner === "DRAW")
            return Match(time, item.player1.username, "Draw", index, navigate);
        }

        return null;
      })}
    </div>
  );
}

export default Matches;
