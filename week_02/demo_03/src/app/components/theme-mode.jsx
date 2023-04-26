import { useState } from "react";

const ThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [degrees, setDegrees] = useState(0);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('is--darkmode');
  }

  const handleDegrees = () => {
    setDegrees(degrees + 6);
    document.body.style.transform = `rotate(${degrees}deg)`;
  }

  const handleLink = (ev) => {
    ev.preventDefault();
    
  };

  return (
    <div className="theme-mode">
      <button className="toggle" onClick={handleToggle}>Theme Toggle</button>
      <button className="degrees" onClick={handleDegrees}>Degrees</button>
      <a href="http://www.pgm.gent" onClick={(ev) => handleLink(ev)}>PGM Website</a>
    </div>
  )
};

export default ThemeMode;