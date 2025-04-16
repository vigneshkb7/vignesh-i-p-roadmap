import React from "react";
import "./Bar.css";

const BarChart = ({ height = 200 }) => {
  const data = [
    { label: "Jan", value: 40 },
    { label: "Feb", value: 60 },
    { label: "Mar", value: 30 },
    { label: "Apr", value: 80 },
    { label: "May", value: 20 },
  ];
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bar-chart-container" style={{ height }}>
      {data.map((item, index) => {
        const barHeight = (item.value / maxValue) * 100; // percentage
        return (
          <div className="bar-wrapper" key={index}>
            <div
              className="bar"
              style={{
                height: `${barHeight}%`,
                backgroundColor: `hsl(${index * 50}, 70%, 50%)`,
              }}
              title={item.value}
            ></div>
            <div className="bar-label">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
