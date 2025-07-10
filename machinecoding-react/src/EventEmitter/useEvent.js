// useEvent.js
import { useEffect } from "react";
import { on, off } from "./EventEmitter";

export function useEvent(eventName, callback) {
  useEffect(() => {
    if (!eventName || typeof callback !== "function") return;

    on(eventName, callback);

    return () => {
      off(eventName, callback); // automatic cleanup
    };
  }, [eventName, callback]);
}
