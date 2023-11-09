import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <strong>Welcome {name}!</strong>
      {age === 0 ? <p>Your are very young</p> : <Age age={age} />}
    </div>
  );
}
