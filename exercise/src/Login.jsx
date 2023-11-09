import { useState } from "react";
import Welcome from "./Welcome";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      const updated = {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };

      return updated;
    });
  }

  /*   console.log(event.target);
   */
  return (
    <div>
      <Welcome name={data.username} />
      <input name="username" value={data.username} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <input
        name="checkbox"
        type="checkbox"
        checked={data.checkbox}
        onChange={handleChange}
      />
      <button>Login</button>
    </div>
  );
}
export default Login;
