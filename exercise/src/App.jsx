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
import { GithubUser } from "./GithubUser";

export function App() {
  return (
    <div>
      {/* <GithubUser userName="Adolfo-97" /> */}
      <Counter initialValue={0} />
      <Counter initialValue={100} />
      <GithubUser userName={"Adolfo-97"} />
    </div>
  );
}
