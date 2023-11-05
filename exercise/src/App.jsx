import { Welcome } from "./Welcome";

export function App({ name, age }) {
  return (
    <div>
      <Welcome name="Jimmy" age={20} />
    </div>
  );
}
