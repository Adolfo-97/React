import { useState } from "react";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name="marco" age={20} />
    </div>
  );
}
