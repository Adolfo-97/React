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
import { NewGithubUser } from "./NewGithubUser";

export function App() {
  return (
    <div>
      {/* <GithubUser userName="Adolfo-97" /> */}
      <NewGithubUser />
    </div>
  );
}
