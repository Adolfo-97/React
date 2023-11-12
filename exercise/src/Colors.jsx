import React from "react";
import { Color } from "./Color";

export function Colors({ arr }) {
  return (
    <ul>
      {arr.map((color) => (
        <Color id={color.id} color={color} />
      ))}
    </ul>
  );
}
