import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Counter({ initialValue }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={onIncrement}>Increment value</button>
      <button onClick={onDecrement}>Decrement value</button>
      <button onClick={onReset}>Reset value</button>
    </div>
  );
}
