export function AlertClock({ date }) {
  function handleButtonClick() {
    alert(`Current time: ${new Date().toDateString()}`);
  }
  return (
    <div>
      <p>Click The button belowto show the current time</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}
