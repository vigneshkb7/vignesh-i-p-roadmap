import React, { useEffect, useState } from "react";

const Progress = ({ id, processComplete, status }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (status === "in-progress") {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev === 100) {
            clearInterval(interval);

            processComplete();
          }
          return prev + 1;
        });
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div key={id}>
      {id} {progress}
      <div className="progress">
        <div
          className="progress-fill"
          style={{ transform: `translateX(${progress - 100}%)` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
