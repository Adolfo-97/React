import React, { useRef, useState } from "react";
import { GithubUser } from "./GithubUser";

export function NewGithubUser() {
  const [newuser, setNewuser] = useState(["Adolfo-97"]);

  function handleSubmit(event) {
    try {
      event.preventDefault();
      const newuserName = new FormData(event.target);
      setNewuser([...newuser, newuserName.get("username")]);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {newuser.map((element, index) => (
          <li key={index}>
            <GithubUser userName={element} />
          </li>
        ))}
      </ul>
    </>
  );
}
