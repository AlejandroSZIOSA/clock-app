import { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/Clock";

function Timer() {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIIsCounting] = useState(false);

  useEffect(() => {
    function timer() {
      setCounter((c) => c + 1);
    }

    const intervalId = setInterval(timer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <h2>TimeR: {counter}</h2>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Timer />
      {/* <Clock city="Santiago" timezone="America" /> */}
    </>
  );
}

export default App;
