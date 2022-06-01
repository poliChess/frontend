import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const { running, onFinish } = props;
  const [time, setTime] = useState(5 * 60 * 1000);
  const [finished, setFinished] = useState(false);
  
  useEffect(() => {
    let interval;
    if (running && !finished) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 300);
      }, 300);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (time <= 0 && !finished) {
      setTime(0);
      setFinished(true);
      onFinish();
    }
  }, [time])

  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
