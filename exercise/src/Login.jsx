import { useState } from "react";
import Welcome from "./Welcome";

function Login({func}) {
  const [data, setData] = useState({
    username: "",
    password: "",
    status: true,
  });
  
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    const status = event.target.disabled;
    setData((data) => {
      const updated = {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };

      return updated;
    });
  }

  function handleLogin(event) {
    /* We prevent the default behaviour with this line */
    event.preventDefault() 
    const loginData = JSON.stringify(data);
    func(loginData)
}
  function handleReset() {
    setData({
      username: "",
      password: "",
    });
  }

  /*   console.log(event.target);
   */

  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="username" value={data.username} onChange={handleChange} />
        <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
        />
        <input name="checkbox" type="checkbox" checked={data.checkbox} onChange={handleChange} />

        <button type="submit" disabled={!data.username || !data.password}>Login</button>
       <button onClick={handleReset}>Reset</button>
</form>

      {/* <Welcome name={data.username} />
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
      <button name="login" disabled={!data.username || !data.password}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button> */}
    </div>
  );
}
export default Login;
