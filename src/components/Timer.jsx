import { useState, useEffect } from "react";

export default function Timer({ countdown = 100 }) {
  const [counter, setCounter] = useState(countdown);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    function timer() {
      setCounter((c) => c - 1);

      /* setCounter((c) => {
        if (counter >= 0) {
          return;
          c - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      }); */
    }

    const intervalId = setInterval(timer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>TIMER</h1>
      <div>
        <h2>
          Set CountDown = <span>{countdown}</span>
        </h2>
      </div>
      <div>
        <h2>Timer: {counter}</h2>
      </div>
    </>
  );
}
