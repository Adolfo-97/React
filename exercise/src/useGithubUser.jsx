import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());

export function useGithubUser(userName) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${userName}`,
    fetcher
  );

  const onFetchUser = async () => {
    mutate(userName);
  };
  return { data, error, onFetchUser };
}
