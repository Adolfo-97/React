import { Welcome } from "./Welcome";

export function App({ name }) {
  return (
    <div>
      <Welcome name="Jimmy" />
      {/* Test with no input */}
      <Welcome />
    </div>
  );
}
