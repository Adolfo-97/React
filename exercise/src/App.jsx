import { useState } from "react";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import InteractiveWelcome from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import Welcome from "./Welcome";
import { NewGithubUser } from "./NewGithubUser";
import GithubUser from "./GithubUser";
import { Login } from "./Login";

export function App() {
  function onLogin(data) {
    console.log("Login data:", data);
  }
  return (
    <div>
      {/* <GithubUser userName="Adolfo-97" /> */}
      <Login func={onLogin} />
    </div>
  );
}
