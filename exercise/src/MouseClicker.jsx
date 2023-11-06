export function MouseClicker() {
  function handlebuttonClick(event) {
    console.log(event.target.name);
  }
  return (
    <button name="one" onClick={handlebuttonClick}>
      Click me
    </button>
  );
}
