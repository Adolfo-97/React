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
      <Link to="/users/Adolfo-97">Github User!</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Mark" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <p>Page not found</p>
              <Link to="/">Take me home </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
