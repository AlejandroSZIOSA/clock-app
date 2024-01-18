import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    clocksContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "25px",
    },
  };

  return (
    <div style={styles.container}>
      <h1> Clocks</h1>
      <div style={styles.clocksContainer}>
        <Clock city="Santiago" timezone="America" />
        <Clock city="London" timezone="Europe" />
      </div>

      <div>
        <h1> Timers</h1>
        <Timer initialSeconds={60} />
        <br />
        <Timer initialSeconds={200} />
        <br />
        <Timer initialSeconds={500} />
      </div>
    </div>
  );
}
export default App;
