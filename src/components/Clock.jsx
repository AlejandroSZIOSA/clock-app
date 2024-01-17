import { useEffect, useState } from "react";

export default function Clock({ city, timezone }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(myClock, 1000);
  }, []);

  function myClock() {
    const date = new Date().toLocaleTimeString("en", {
      timeZone: `${timezone}/${city}`,
    });
    /* console.log(date); */
    setTime(date);
  }

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "aqua",
      padding: "10px",
      border: "10px solid blue",
      borderRadius: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <h1> City: {city}</h1>
        <h2>Time Zone: {timezone}</h2>
      </div>
      <div>
        <h1>Time: {time}</h1>
      </div>
    </div>
  );
}
