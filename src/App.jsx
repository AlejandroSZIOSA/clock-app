import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="appContainer">
      <h1> Clocks && Timers</h1>
      <div className="clocksOuterContainer">
        <h2>Clocks</h2>
        <div className="clocksInnerContainer">
          <Clock city="Santiago" timezone="America" />
          <Clock city="London" timezone="Europe" />
        </div>
      </div>
      <h2> Timers</h2>
      <div className="timersOuterContainer">
        <Timer initialSeconds={60} />
        <Timer initialSeconds={200} />
        <Timer initialSeconds={500} />
      </div>
    </div>
  );
}
export default App;
