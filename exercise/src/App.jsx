import { Welcome } from "./Welcome";

export function App() {
  const strongName = <strong>Jimmy</strong>;

  return (
    <div>
      <Welcome name={strongName} age={22} />
    </div>
  );
}
