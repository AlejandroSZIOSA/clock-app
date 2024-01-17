import "./App.css";
import Clock from "./components/Clock";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div style={styles.container}>
      <h1> Clock's Zones</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "25px",
        }}
      >
        <Clock city="Santiago" timezone="America" />
        <Clock city="London" timezone="Europe" />
      </div>

      <div>
        <h1> Countdowns</h1>
        <CountdownTimer initialSeconds={60} />
        <br />
        <CountdownTimer initialSeconds={200} />
        <br />
        <CountdownTimer initialSeconds={500} />
      </div>
    </div>
  );
}
export default App;
