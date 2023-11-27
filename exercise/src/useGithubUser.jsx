import useSWR from "swr";
const fetcher2 = (url) => fetch(url).then((r) => r.json());

export function useGithubUser(userName) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${userName}`,
    fetcher2
  );

  const onFetchUser = async () => {
    mutate(userName);
    console.log(userName);
  };

  return { data, error, onFetchUser };
}
