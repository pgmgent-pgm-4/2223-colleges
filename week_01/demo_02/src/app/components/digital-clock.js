// Import external modules
import { useState } from "react";

const DigitalClock = () => {
  const [timeStr, setTimeStr] = useState(new Date().toLocaleTimeString());

  const timeInterval = setInterval(() => setTimeStr(new Date().toLocaleTimeString(), 1000));

  return (
    <div className="digital-clock">
      {timeStr}
    </div>
  );
};

export default DigitalClock;