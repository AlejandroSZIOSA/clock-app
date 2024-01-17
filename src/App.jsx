import "./App.css";
import Clock from "./components/Clock";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
    <>
      {/* <CountdownTimer initialSeconds={60} /> */}

      <Clock city="Santiago" timezone="America" />
    </>
  );
}
export default App;
