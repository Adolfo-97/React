import { Age } from "./Age";

export function Welcome({ name = "Jimmy", age }) {
  return (
    <div>
      <p>
        Welcome:
        <strong>{name}</strong>
        <p>
          <Age age={age} />
        </p>
      </p>
    </div>
  );
}
