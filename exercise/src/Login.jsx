import { useState } from "react";
function initialiseData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}
export function Login({ loginFunction }) {
  const [data, setData] = useState(initialiseData());
  function handleLogin() {
    loginFunction(data);
  }
  function handleReset() {
    setData(initialiseData());
  }
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((d) => {
      const updatedData = {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
      return updatedData;
    });
    console.log(data);
  }
  return (
    <div>
      <p>Login data:</p>
      <input
        onChange={handleChange}
        type="text"
        value={data.username}
        name="username"
      />
      <input
        onChange={handleChange}
        type="password"
        value={data.password}
        name="password"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        checked={data.session}
        name="session"
      />
      <button disabled={!data.username || !data.password} onClick={handleLogin}>
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
