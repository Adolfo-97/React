import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleButtonIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>Counter to {counter}</h2>
      <button onClick={handleButtonIncrement}>Increment value</button>
    </div>
  );
}
