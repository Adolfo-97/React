import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <strong>Welcome {name}!</strong>
      <Age age={15} />
    </div>
  );
}
