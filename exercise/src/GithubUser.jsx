import React, { useState, useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ userName }) {
  const { data, onFetchUser } = useGithubUser(userName);

  function handleUserData(event) {
    event.preventDefault();
    onFetchUser(userName);
  }
  return (
    <div>
      <p>Insert the user you're looking for:</p>
      <form onSubmit={handleUserData}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      <p>
        username:
        {data.name == null ? "The user didn't select an username" : data.name}
      </p>
      <p>
        nickname:
        {data.login == null ? "The user didn't select a nickname" : data.login}
      </p>
      <img src={data.avatar_url} width={"100px"} />
    </div>
  );
}
