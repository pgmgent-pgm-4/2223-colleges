// Import external modules
import { useEffect, useState } from "react";

// Styling
import './clock.css';

const Clock = ({ utc, city }) => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    const now = new Date();
    now.setUTCHours(now.getUTCHours() + (utc ? utc : 0));
    setDate(now);
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 500);
    return () => {
      clearInterval(timerId);
    }
  }, [utc]);

  useEffect(() => {
    document.body.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
  }, [date]);

  return (
    <div className="digital-clock">
      <span className="time">{ date.toLocaleTimeString() }</span>
      <span className="city">{ city }</span>
    </div>
  )
};

export default Clock;