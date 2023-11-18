import { useState } from "react";

export function useLogin({ func }) {
  function handleLogin(event) {
    /* We prevent the default behaviour with this line */
    event.preventDefault();
    const loginData = JSON.stringify(data);
    func(loginData);
  }
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
    setData((data) => {
      const updated = {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };

      return updated;
    });
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
    });
  }
  return {
    data,
    sendLogin: handleLogin,
    onLogin: handleChange,
    onReset: handleReset,
  };
}
