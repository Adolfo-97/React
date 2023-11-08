import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const [username, setUsername] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setUsername(value);
  }

  /*   console.log(username);
   */
  return (
    <div>
      <Welcome name={username} />
      <input value={username} onChange={handleChange} />
    </div>
  );
}
export default InteractiveWelcome;
