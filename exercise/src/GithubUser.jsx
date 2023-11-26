import { useEffect, useState } from "react";

export function GithubUser({ userName }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((json) => {
        setUsername(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, [userName]);
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
