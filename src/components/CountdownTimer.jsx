import { useState, useEffect } from "react";

export default function CountdownTimer({ initialSeconds = 100 }) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (counter <= 0) {
      return;
    }

    function timer() {
      setCounter((c) => c - 1);
    }

    const intervalId = setInterval(timer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  function timer() {}

  return (
    <>
      <h1>TIMER</h1>
      <div>
        <h2>
          Set CountDown = <span>{initialSeconds}</span>
        </h2>
      </div>
      <div>
        <h2>Timer: {counter}</h2>
      </div>
    </>
  );
}
