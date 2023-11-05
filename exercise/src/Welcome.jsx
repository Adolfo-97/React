import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <div>
      <strong>Welcome {name}!</strong>
      <Age age={22} />
    </div>
  );
}
