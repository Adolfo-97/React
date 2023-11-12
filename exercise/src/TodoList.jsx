import { useRef, useState } from "react";

export function TodoList() {
  const inputValue = useRef(null);
  const [todos, setTodos] = useState([]);

  function handleButtonClick() {
    const newTodo = inputValue.current.value;
    if (inputValue.current.value) {
      setTodos([...todos, newTodo]);
    } else {
    }
  }
  return (
    <div>
      <ul>
        {todos.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
      <input ref={inputValue} name="input" type="text" />
      <button onClick={handleButtonClick}>Invia</button>
    </div>
  );
}
