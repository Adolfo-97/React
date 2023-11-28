import React, { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser() {
  const [userName, setUserName] = useState("Adolfo-97");
  const { data, error, onFetchUser } = useGithubUser(userName);

  const handleUserData = (event) => {
    event.preventDefault();
    const newUserName = event.target.username.value;
    // Non so come controllare se un username è nullO senza prima fare il
    // Fetch, quindi lascio un semplice if con name != null
    if (newUserName) {
      console.log("Fetching data for username:", newUserName);
      setUserName(newUserName);
      onFetchUser(newUserName);
    } else {
      console.log("Username is null");
    }
  };

  return (
    <div>
      <p>Insert the user you're looking for:</p>
      <form onSubmit={handleUserData}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error fetching data</p>}
      {data && (
        <div>
          <p>username: {data.name || "The user didn't select an username"}</p>
          <p>nickname: {data.login || "The user didn't select a nickname"}</p>
          <img src={data.avatar_url} width={"100px"} alt="User Avatar" />
        </div>
      )}
    </div>
  );
}
