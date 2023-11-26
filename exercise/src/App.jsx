import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App({ name }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Mark" />} />
        <Route
          path="/Counter"
          element={<Counter initialValue={0} increment={1} />}
        />
      </Routes>
    </div>
  );
}
