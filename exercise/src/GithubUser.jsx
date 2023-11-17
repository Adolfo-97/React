import { useEffect, useState } from "react";

export function GithubUser({ userName }) {
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

/* export function GithubUser({ userName }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [userName]);

  return (
    <>
      <p>Nome: {user && user.name ? user.name : "Not found"}</p>
      <p>Login: {user && user.login ? user.login : "Not found"}</p>
      {user && user.avatar_url && <img src={user.avatar_url} width={"100px"} />}
    </>
  );
} */

/* 
return fetch(`https://api.github.com/users/Adolfo-97`)
    .then((response) => {
      console.log(`Response : ${response.status}`);
      return response.json();
    })
    .then(console.log(response)); */
