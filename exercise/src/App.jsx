import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import Welcome from "./Welcome";

export function App() {
  function onLogin(data) {
    console.log("Login data:", data);
  }
  const colorObjList = [
    { id: 1, name: "blue" },
    { id: 2, name: "red" },
    { id: 3, name: "yellow" },
    { id: 4, name: "green" },
  ];
  return (
    <div>
      <Welcome name={"Luca"} />
      <Login func={onLogin} />
      <UncontrolledLogin />
      <FocusableInput />
      <Counter />
      <Colors arr={colorObjList} />
      <TodoList />
    </div>
  );
}
