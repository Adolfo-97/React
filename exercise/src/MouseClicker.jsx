import { useEffect } from "react";

export function MouseClicker() {
  function handleMouseClick(event) {
    console.log(event.target.name);
  }
  function handleImageClick(event) {
    console.log(event.currentTarget.src);
  }
  return (
    <div>
      <button name="one" onClick={handleMouseClick}>
        <img
          onClick={handleImageClick}
          src="https://student.develhope.co/assets/images/brand/develhope.svg"
          width={"124px"}
          alt=""
        />
      </button>
    </div>
  );
}
