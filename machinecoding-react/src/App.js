import "./App.css";
import Progress from "./ProgressBar";
import { useState, useEffect, useRef } from "react";
import Infinite from "./Infinite";
import LoginForm from "./Form";
import ProductGrid from "./Product";
import Cart from "./Cart";
import DragDropList from "./DragDropList";
import InfiniteScroll from "./Infinites";
import Todo from "./Todo";
import CommentSection from "./NestedComments";
import FileExplorer from "./FileExplorer";
import NestedCheckboxTree from "./NestedCheckBox";
import Step from "./Stepper";
import Search from "./Search";
import BarChart from "./Bar";
import QueueManager from "./QueueManager";

const totalMS = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMS / interval;
const progressMade = (interval / totalMS) * 100;

function App() {
  const [progress, setProgress] = useState(10);
  const timer = useRef();
  const cyclecompleted = useRef(0);

  // useEffect(() => {
  //   timer.current = setInterval(() => {
  //     setProgress((prevProgress) => prevProgress + progressMade);
  //     cyclecompleted.current += 1;
  //     console.log(cyclecompleted.current, totalCycles);
  //     if (cyclecompleted.current === totalCycles) {
  //       clearInterval(timer.current);
  //     }
  //   }, interval);

  //   return () => {
  //     clearInterval(timer.current);
  //   };
  // }, []);

  return (
    <div className="App">
      {/*Progress bar */}
      {/* <Progress progress={progress} /> */}
      {/* Infinite scrolling */}
      {/* <Infinite /> */}
      {/* Custom form validation hook*/}
      {/* <LoginForm />
      <ProductGrid />
      <Cart /> */}
      {/* <DragDropList /> */}
      {/* <InfiniteScroll /> */}
      {/* <CommentSection /> */}
      {/* <FileExplorer /> */}
      {/* <NestedCheckboxTree /> */}
      {/* <Step /> */}
      {/* <Search /> */}
      {/* <BarChart /> */}
      {/* <Todo /> */}
      <QueueManager />
    </div>
  );
}

export default App;
