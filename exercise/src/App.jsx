import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

export function App() {
  function onLogin(data) {
    console.log('Login data:', data)
  }
  return (
    <div>
      <Login func={onLogin}/>
    </div>
  );
}
