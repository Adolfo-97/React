export function MouseClicker() {
  function handlebuttonClick(event) {
    console.log(
      event.target.src
    ); /* We prevent to name attribute of the button from bein printed by pointing the src content from the event instead of the name */
  }
  return (
    <button name="one" onClick={handlebuttonClick}>
      <img src="Ciao" width={24} height={24} />
      Click me
    </button>
  );
}
