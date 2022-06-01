import React, { useState } from "react";

import pieces from "../utils/pieces";
import win from "../pictures/misc/win.png";
import loss from "../pictures/misc/loss.png";

function Match(time, enemy, result, key) {
  return (
    <div key={key}
      className={
        result === "Victory"
          ? "bg-green-600 flex mt-4 rounded-md"
          : "bg-red-800 flex mt-4 rounded-md"
      }
    >
      <div className="w-1/3 text-center self-center text-white font-mono">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      <div className="w-1/3">
        <img
          className="m-auto"
          src={result === "Victory" ? win : loss}
          height="80px"
          width="80px"
        />
      </div>

      <div className="w-1/3 text-center self-center text-white font-mono">
        {enemy}
      </div>
    </div>
  );
}

function Matches({ golden, user }) {
  return (
    <div className="bg-decoration-bg h-96 flex-row overflow-y-scroll flex-shrink-0 border-4 border-decoration-bg scrollbar-hide">
      {golden.map((item, index) => {
        if (item.type === "COMPUTER") {
          if (item.winner === "WHITE") {
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              "Computer",
              "Victory", 
              index
            );
          }

          if (item.winner === "BLACK") {
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              "Computer",
              "Defeat", 
              index
            );
          }
        }

        if (item.type === "NORMAL") {
          if (
            item.player1.username === user.username &&
            item.winner === "WHITE"
          )
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              item.player2.username,
              "Victory", 
              index
            );

          if (
            item.player1.username === user.username &&
            item.winner === "BLACK"
          )
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              item.player2.username,
              "Defeat", 
              index
            );

          if (
            item.player2.username === user.username &&
            item.winner === "WHITE"
          )
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              item.player1.username,
              "Defeat", 
              index
            );

          if (
            item.player2.username === user.username &&
            item.winner === "BLACK"
          )
            return Match(
              new Date(item.finishedAt).getTime() -
                new Date(item.startedAt).getTime(),
              item.player1.username,
              "Victory", 
              index
            );
        }
      })}
    </div>
  );
}

export default Matches;
