import React, { useState, useEffect } from "react";

export default function GithubUser({ userName }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((json) => {
        setUsername(json);
        console.log(json);
      });
    /*       .catch((error) => new Error());
     */
  }, []);

  return (
    <div>
      <p>
        username:
        {username.name == null
          ? "The user didn't select an username"
          : username.name}
      </p>
      <p>
        nickname:
        {username.login == null
          ? "The user didn't select a nickname"
          : username.login}
      </p>
      <img src={username.avatar_url} width={"100px"} />
    </div>
  );
}
