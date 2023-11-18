import { useEffect, useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(userName) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const json = await response.json();
      console.log("fetchato");
      if (response.status !== 200) {
        setError(new Error());
      }
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, onFetchUser: fetchGithubUser };
}
