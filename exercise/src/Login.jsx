import { useState } from "react";
import Welcome from "./Welcome";
import { useLogin } from "./useLogin";

export function Login({ func }) {
  const { data, sendLogin, onLogin, onReset } = useLogin({ func });

  return (
    <div>
      <form onSubmit={sendLogin}>
        <input name="username" value={data.username} onChange={onLogin} />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={onLogin}
        />

        <button type="submit" disabled={!data.username || !data.password}>
          Login
        </button>
        <button onClick={onReset}>Reset</button>
      </form>
    </div>
  );
}
