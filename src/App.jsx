import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(myTimer, 1000);
  }, []);

  function myTimer() {
    const date = new Date().toLocaleTimeString();
    setTime(date);
  }

  return (
    <>
      <div>
        <div> {time}</div>
        <div>
          <p> Hola</p>
        </div>
      </div>
    </>
  );
}

export default App;
