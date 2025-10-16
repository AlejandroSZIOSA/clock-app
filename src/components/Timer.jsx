import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

export default function Timer({ initialSeconds = 100 }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  //UseEffect Hook
  useEffect(() => {
    //Goes outside useEffect when seconds reach "0"
    if (seconds <= 0) {
      return;
    }
    timer; //Calling a function by reference
    const intervalId = setInterval(timer, 1000); //Set new Seconds value

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]); //Dependency: When useState hook "seconds" changes, then will useEffect renders again until reach "0"

  //Set initial Seconds value
  function timer() {
    setSeconds((c) => c - 1);
  }

  //Arrow function Gives a time format output
  const formatTime = (currentSeconds) => {
    const minutes = Math.floor(currentSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (currentSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={classes.timerContainer}>
      <h2>Timer = {initialSeconds} Sec</h2>
      <div>
        <h3>Countdown = {formatTime(seconds)} Min/Sec</h3>
      </div>
    </div>
  );
}
