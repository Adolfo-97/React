import { GithubUser } from "./GithubUser";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <div>
        {/* <GithubUser userName="Adolfo-97" /> */}

        <GithubUser userName={"Adolfo-97"} />
      </div>
    </SWRConfig>
  );
}
