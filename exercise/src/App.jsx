import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App({ name }) {
  return (
    <div>
      <Routes>
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
