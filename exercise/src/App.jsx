import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  function onLogin(data) {
    console.log("Login data:", data);
  }
  return (
    <div>
      <Login func={onLogin} />
      <UncontrolledLogin />
      <FocusableInput />
      <Counter />
    </div>
  );
}
