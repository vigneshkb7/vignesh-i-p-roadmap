// ListenerComponent.jsx
import React, { useState } from "react";
import { useEvent } from "./useEvent";

const ListenerComponent = () => {
  const [msg, setMsg] = useState("");

  useEvent("myEvent", (payload) => {
    if (payload && payload.message) {
      setMsg(payload.message);
    }
  });

  return <div>Received: {msg}</div>;
};

export default ListenerComponent;
