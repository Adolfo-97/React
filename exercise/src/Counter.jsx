import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (trackRef.current === "up") {
      console.log("up");
    } else if (trackRef.current === "down") {
      console.log("down");
    } else {
    }
  }, [counter]);

  function handleButtonIncrement() {
    setCounter(counter + 1);
    trackRef.current = "up";
  }
  function handleButtonDecrement() {
    setCounter(counter - 1);
    trackRef.current = "down";
  }
  function handleButtonReset() {
    setCounter(0);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button ref={trackRef} onClick={handleButtonIncrement}>
        Increment value
      </button>
      <button ref={trackRef} onClick={handleButtonDecrement}>
        Decrement value
      </button>
      <button onClick={handleButtonReset}>Reset value</button>
    </div>
  );
}
