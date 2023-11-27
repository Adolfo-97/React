import useSWR from "swr";

export function useGithubUser(userName) {
  const { data, error, mutate } = useSWR(userName, async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const json = await response.json();
    return json;
  });

  const onFetchUser = async () => {
    mutate(userName);
    console.log("should have mutated");
    console.log("new username:");
    console.log(userName);
  };

  return { data, error, onFetchUser };
}
