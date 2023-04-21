import { useState } from "react";

// Styling
import './theme-switch.css';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button className={`btn-themeswitch ${isDarkMode ? 'is--darkmode' : 'is--lightmode'}`} onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? 'Light' : 'Dark'} Mode</button>
  );
};

export default ThemeSwitch;