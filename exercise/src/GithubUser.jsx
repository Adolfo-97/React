import React, { useState, useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ userName }) {
  const { data, loading, error, onFetchUser } = useGithubUser(userName);
  const [newuser, setNewuser] = useState([null]);

  //form handling
  function handleSubmit(event) {
    try {
      event.preventDefault();
      const newuserName = new FormData(event.target);
      setNewuser(newuserName.get("username"));
      onFetchUser(newuser);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {loading && <h1>loading</h1>}
      {error && <h1>error</h1>}
      {data && <h1>{data.login}</h1>}
      {data.name && <h1>data.name</h1>}
    </div>
  );
}
