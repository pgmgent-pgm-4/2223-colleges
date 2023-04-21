import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button className={``} style={ { backgroundColor: `${isDarkMode ? '#000' : '#fff'}`}} onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? 'Light' : 'Dark'} Mode</button>
  );
};

export default ThemeSwitch;