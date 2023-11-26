import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App({ name }) {
  return (
    <div>
      <Link to="/">Home</Link>
      <hr />
      <Link to="/counter">Counter</Link>
      <hr />
      <Link to="/users/Adolfo-97">Adolfo's Github</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Mark" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}
