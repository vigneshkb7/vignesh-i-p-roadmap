// App.jsx
import React from "react";
import EmitterComponent from "./Emitter";
import ListenerComponent from "./Listener";

function EventApp() {
  return (
    <div>
      <h2>Event Emitter Demo</h2>
      <EmitterComponent />
      <ListenerComponent />
    </div>
  );
}

export default EventApp;
