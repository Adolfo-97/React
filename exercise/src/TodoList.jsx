import { useRef, useState } from "react";

export function TodoList() {
  const inputValue = useRef(null);
  const [todos, setTodos] = useState([]);

  function handleButtonClick() {
    const newTodo = inputValue.current.value;
    if (inputValue.current.value) {
      setTodos([...todos, newTodo]);
      inputValue.current.value = "";
    } else {
    }
  }
  function handleButtonReset() {
    setTodos([]);
  }
  function removeLi(index) {
    setTodos((todos) => todos.filter((el, i) => i !== index));
  }
  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeLi(index)}>remove</button>
          </li>
        ))}
      </ul>
      <input ref={inputValue} name="input" type="text" />
      <button onClick={handleButtonClick}>Invia</button>
      <button onClick={handleButtonReset}>Reset</button>
    </div>
  );
}
