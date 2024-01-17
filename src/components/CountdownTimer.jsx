import { useState, useEffect } from "react";

export default function CountdownTimer({ initialSeconds = 100 }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isCounting, setIsCounting] = useState(true);

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

  //Give a time output format
  const formatTime = (currentSeconds) => {
    const minutes = Math.floor(currentSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (currentSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const styles = {
    container: {
      width: "600px",
      display: "flex",
      flexDirection: "row",
      gap: "3rem",
      background: "yellow",
      padding: "0rem 2rem 0rem 2rem",
      border: "5px solid",
      borderRadius: "15px",
    },
  };
  return (
    <div style={styles.container}>
      <div>
        <h2>Timer = {initialSeconds} Sec</h2>
      </div>
      <div>
        <h2>Countdown = {formatTime(seconds)} Min/Sec</h2>
      </div>
    </div>
  );
}
