import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Timer countdown={10} />
      {/* <Clock city="Santiago" timezone="America" /> */}
    </>
  );
}

export default App;
