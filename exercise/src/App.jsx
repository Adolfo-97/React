import { useState } from "react";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import Login from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import Welcome from "./Welcome";

export function App() {
  const [language, setlanguage] = useState("en");

  function handleLanguage(event) {
    setlanguage(event.target.value);
  }

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
        <select value={language} onChange={handleLanguage}>
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>{" "}
        <Welcome name={"Luca"} />
        <LanguageContext.Provider value={language}>
          <Clock />
        </LanguageContext.Provider>
        <Login func={onLogin} />
        <UncontrolledLogin />
        <FocusableInput />
        <Counter />
        <TodoList />
      </div>
    </Container>
  );
}
