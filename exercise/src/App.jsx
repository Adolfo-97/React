import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Clock />
      <MouseClicker />
    </div>
  );
}
