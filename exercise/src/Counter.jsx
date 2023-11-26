import { useState } from "react";

export function Counter({ initialValue = 99, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((counter) => counter + increment);
    //It's important to use a function to deal with asynchronous updates, like in this case we want to update the latest "version" of our counter, an immedediate
    //value may update the value only once at the time even if we do more increments inside a function.
  }
  return (
    <div>
      <h2>The count is at : {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
