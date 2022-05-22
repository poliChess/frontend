import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [time, setTime] = useState(5 * 60 * 1000);
  
  useEffect(() => {
    let interval;
    if (props.running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.running]);

  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;