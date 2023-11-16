import { useState } from "react";

export function Container({ title, children }) {
  const [collapse, setCollapse] = useState(true);

  function handleCollapse() {
    setCollapse((c) => !c);
  }
  return (
    <div className="app">
      <div className="app-title">
        {title} <button onClick={handleCollapse}>Collapse</button>
      </div>
      {collapse && <div className="app-container">{children}</div>}
    </div>
  );
}
