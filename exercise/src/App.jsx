import { Clock } from "./Clock";
import { Container } from "./Container";
import Login from "./Login";
import Welcome from "./Welcome";

export function App() {
  function onLogin(data) {
    console.log("Login data:", data);
  }

  return (
    <Container title={"Container title, click me"}>
      <div>
        <Welcome name={"Luca"} />
        <Clock />
        <Login func={onLogin} />
      </div>
    </Container>
  );
}
