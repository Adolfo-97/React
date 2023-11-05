import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <strong>Welcome {name}!</strong>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name == "John" && <Age age={age} />}
      {<Age age={age} />}
    </div>
  );
}
