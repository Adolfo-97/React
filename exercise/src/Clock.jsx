import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
export function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <div className="clock">
      <p>
        {language === "en"
          ? `The current time is ${date.toLocaleTimeString()}`
          : `Sono le ${date.toLocaleTimeString()}`}
      </p>
    </div>
  );
}
