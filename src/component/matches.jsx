import win from "../pictures/misc/win.png";
import loss from "../pictures/misc/loss.png";
import draw from "../pictures/misc/rook_bg.png";

function Match(time, enemy, result, key) {
  let style = "";
  let pic = null; 

  if (result === "Victory") {
    style = "bg-green-600 flex mt-4 rounded-md";
    pic = win;
  }

  if (result === "Defeat") {
    style = "bg-red-800 flex mt-4 rounded-md"
    pic = loss;
  }

  if (result === "Draw") {
    style = "bg-red-800 flex mt-4 rounded-md"
    pic = draw;
  }

  return (
    <div key={key} className={style}>
      <div className="w-1/3 text-center self-center text-white font-mono">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      <div className="w-1/3">
        <img className="m-auto" src={pic} height="80px" width="80px" />
      </div>

      <div className="w-1/3 text-center self-center text-white font-mono">
        {enemy}
      </div>
    </div>
  );
}

function Matches({ golden, user }) {
  if (!golden)
    return null;

  return (
    <div className="bg-decoration-bg h-96 flex-row overflow-y-scroll flex-shrink-0 border-4 border-decoration-bg scrollbar-hide">
      { golden.map((item, index) => {
        const time = new Date(item.finishedAt).getTime() - new Date(item.startedAt).getTime();

        if (item.type === "COMPUTER") {
          if (item.winner === "WHITE")
            return Match(time, "Computer", "Victory", index);

          if (item.winner === "BLACK")
            return Match(time, "Computer", "Defeat", index);

          if (item.winner === "DRAW")
            return Match(time, "Computer", "Draw", index);
        }

        if (item.type === "NORMAL") {
          if (item.player1.username === user.username && item.winner === "WHITE")
            return Match(time, item.player2.username, "Victory", index);

          if (item.player1.username === user.username && item.winner === "BLACK")
            return Match(time, item.player2.username, "Defeat", index);

          if (item.player1.username === user.username && item.winner === "DRAW")
            return Match(time, item.player2.username, "Draw", index);


          if (item.player2.username === user.username && item.winner === "WHITE")
            return Match(time, item.player1.username, "Defeat", index);

          if (item.player2.username === user.username && item.winner === "BLACK")
            return Match(time, item.player1.username, "Victory", index);

          if (item.player2.username === user.username && item.winner === "DRAW")
            return Match(time, item.player1.username, "Draw", index);
        }
      })}
    </div>
  );
}

export default Matches;