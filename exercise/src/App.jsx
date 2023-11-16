import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
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
    <Container title={"Ciao"}>
      <div>
        <Welcome name={"Luca"} />
        <Clock />
        <Login func={onLogin} />
        <UncontrolledLogin />
        <FocusableInput />
        <Counter />
        <TodoList />
      </div>
    </Container>
  );
}
