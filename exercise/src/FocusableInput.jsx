import { StrictMode, useEffect, useRef } from "react";

export function FocusableInput() {
  const mountedRef = useRef(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounted the first time");
    } else {
      console.log("Strictmode is on, mounted for the second time");
    }
    trackRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={trackRef} type="text" />
    </div>
  );
}
