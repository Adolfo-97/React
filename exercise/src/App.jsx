import { useState } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

function handleButtonClick() {
  alert(`Current time: ${new Date().toDateString()}`);
}

export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Welcome name="marco" age={20} />
      <AlertClock alertFunction={handleButtonClick} />
    </div>
  );
}
