import { useEffect, useState } from "react";

export default function Clock({ city, timezone }) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setInterval(myClock, 1000);
  }, []);

  function myClock() {
    const selectedTimeZone = new Date().toLocaleTimeString("en", {
      timeZone: `${timezone}/${city}`,
    });
    /* console.log(date); */
    setCurrentTime(selectedTimeZone);
  }

  const styles = {
    container: {
      width: "300px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "aqua",
      border: "10px solid blue",
      borderRadius: "15px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <h3> City: {city}</h3>
        <h3>Time Zone: {timezone}</h3>
      </div>
      <div>
        <h2>Time: {currentTime}</h2>
      </div>
    </div>
  );
}
