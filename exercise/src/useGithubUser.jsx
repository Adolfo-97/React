import useSWR from "swr";

export function useGithubUser(userName) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${userName}`
  );

  const onFetchUser = async () => {
    mutate(userName);
  };
  return { data, error, onFetchUser };
}
