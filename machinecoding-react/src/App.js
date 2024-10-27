import "./App.css";
import Progress from "./ProgressBar";
import { useState, useEffect, useRef } from "react";

const totalMS = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMS / interval;
const progressMade = (interval / totalMS) * 100;

function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclecompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + progressMade);
      cyclecompleted.current += 1;
      console.log(cyclecompleted.current, totalCycles);
      if (cyclecompleted.current === totalCycles) {
        clearInterval(timer.current);
      }
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="App">
      <Progress progress={progress} />
    </div>
  );
}

export default App;
