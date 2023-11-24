import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [username, setUsername] = useState("");
  function handleName(event) {
    const nameInput = event.target.value;
    setUsername(nameInput);
    console.log(username);
  }
  return (
    <div>
      <input onChange={handleName} value={username} type="text" />
      <Welcome name={username} />
    </div>
  );
}
