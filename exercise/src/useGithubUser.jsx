import { useEffect, useState } from "react";

export function useGithubUser({ userName }) {
  const [data, setData] = useState("");

  async function fetchGithubUser(userName) {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const json = await response.json();
      setData(json);
    } catch (error) {}
  }

  return { data, onFetchUser: fetchGithubUser };
}
