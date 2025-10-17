import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="appContainer">
      <h1> Clocks && Timers</h1>
      <div className="clocksOuterContainer">
        <h2 className="sectionTitles">Clocks</h2>
        <div className="clocksInnerContainer">
          <Clock city="Stockholm" timezone="Europe" />
          <Clock city="London" timezone="Europe" />
          <Clock city="Santiago" timezone="America" />
        </div>
      </div>
      <h2 className="sectionTitles"> Timers</h2>
      <div className="timersOuterContainer">
        <Timer initialSeconds={60} />
        <Timer initialSeconds={120} />
        <Timer initialSeconds={360} />
      </div>
    </div>
  );
}
export default App;
