import { useEffect, useState } from "react";
import classes from "./Clock.module.css";

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

  return (
    <div className={classes.clockContainer}>
      <div>
        <h3> City: {city}</h3>
        <p>Time Zone: {timezone}</p>
      </div>
      <div>
        <h3>Time: {currentTime}</h3>
      </div>
    </div>
  );
}
