import { Welcome } from "./Welcome";

export function App({ name }) {
  return (
    <div>
      <Welcome name="Mark" />
      {/* Test with no input */}
      <Welcome />
    </div>
  );
}
