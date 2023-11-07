import { Welcome } from "./Welcome";
import { Age } from "./Age";

export function App({ name, age }) {
  return (
    <div>
      <Welcome name="Jimmy" age={18} />
    </div>
  );
}
