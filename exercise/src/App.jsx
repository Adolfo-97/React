import { Hello } from "./Hello";
import { Message } from "./Message";
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
    </div>
  );
}
/* Yes it can be used more than once and I can also render the Message component on the App componenet as long I use the correct Import function*/
