import { useEffect, useState } from "react";

export default function Clock({ city, timezone }) {
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
        <h1> City: {city}</h1>
      </div>
      <div>
        <h1>Time Zone: {timezone}</h1>
      </div>
      <div>
        <h2>Time: {time}</h2>
      </div>
    </>
  );
}
