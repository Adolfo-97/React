import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: "",
  });
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
        value={data.session}
        name="checkbox"
      />
    </div>
  );
}
