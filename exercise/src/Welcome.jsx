import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <strong>Welcome {name}!</strong>
      {age > 18 && <Age age={age} />}
      {age === 0 && <p>Your are very young</p>}
    </div>
  );
}
