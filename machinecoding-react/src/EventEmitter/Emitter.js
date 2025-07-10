// EmitterComponent.jsx
import React from "react";
import { emit } from "./EventEmitter";

const EmitterComponent = () => {
  const handleClick = () => {
    emit("myEvent", { message: "Hello from EmitterComponent!" });
  };

  return <button onClick={handleClick}>Emit Event</button>;
};

export default EmitterComponent;
