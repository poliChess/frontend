import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
      let interval;
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      </div>
    );
  };

export default Stopwatch;