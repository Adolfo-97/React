import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App({ name }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Mark" />} />
      </Routes>
    </div>
  );
}
