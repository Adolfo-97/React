import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`The value of the counter is ${counter}`);
  }, [counter]);
  function handleButtonIncrement() {
    setCounter(counter + 1);
  }
  function handleButtonDecrement() {
    setCounter(counter - 1);
  }
  function handleButtonReset() {
    setCounter(0);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleButtonIncrement}>Increment value</button>
      <button onClick={handleButtonDecrement}>Decrement value</button>
      <button onClick={handleButtonReset}>Reset value</button>
    </div>
  );
}
