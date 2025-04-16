import React, { useEffect, useState } from "react";
import Progress from "./ProgressBar";

const QueueManager = () => {
  const threshold = 2;
  const [queue, setQueue] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addRequest = () => {
    const newRed = {
      id: Math.random(),
      status: "todo",
    };

    setQueue((prev) => [...prev, newRed]);
  };

  const process = () => {
    if (processing.length < threshold && queue.length > 0) {
      const q = queue.shift();
      setProcessing((prev) => [...prev, { ...q, status: "in-progress" }]);
    }
  };

  const processComplete = (id) => {
    console.log(id);
    const found = processing.find((r) => (r.id = id));
    console.log(found);
    setCompleted((prev) => [...prev, { ...found, status: "completed" }]);
  };

  useEffect(() => {
    process();
  }, [addRequest]);

  return (
    <div>
      <button onClick={() => addRequest()}>Add request</button>
      <h3>Queue {queue.length}</h3>
      {queue.map((q, idx) => {
        return (
          <div>
            {q.id}{" "}
            <Progress
              id={q.id}
              processComplete={() => processComplete(q.id)}
              status={q.status}
            />{" "}
          </div>
        );
      })}
      <h3>Processing {processing.length}</h3>
      {processing.map((q, idx) => (
        <div>
          {q.id}{" "}
          <Progress
            id={q.id}
            processComplete={() => processComplete(q.id)}
            status={q.status}
          />
        </div>
      ))}
      <h3>Completed {completed.length}</h3>
    </div>
  );
};

export default QueueManager;
