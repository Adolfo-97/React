import { useState } from "react";
import Welcome from "./Welcome";
import { useLogin } from "./useLogin";
import { useCurrentLocation } from "./useCurrentLocation";

export function Login({ func }) {
  const { data, sendLogin, onLogin, onReset } = useLogin({ func });
  const { latitude, longitude, findMe, status, error } =
    useCurrentLocation(null);
  return (
    <div>
      <p>user position</p>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <button onClick={findMe}>Find me</button>
      {status && <p>{status}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
