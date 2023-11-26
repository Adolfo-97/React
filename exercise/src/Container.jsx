import { useState } from "react";

export function Container({ title, children }) {
  const [collapse, setCollapse] = useState(null);
  function collpaseContent() {
    setCollapse((c) => !c);
    console.log(collapse);
  }
  return (
    <div className="app">
      <div onClick={collpaseContent} className="app-title">
        {title}
      </div>
      {collapse && <div className="app-content">{children}</div>}
    </div>
  );
}
