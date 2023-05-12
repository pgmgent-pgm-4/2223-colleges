import React from 'react';
import { ThemeContext, useThemeContext } from '../contexts/theme.context';

const ThemedButton = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();
  const handleClick = (ev) => {

  };

  return (
    <button onClick={handleClick} type="button" className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}>Button</button>
  );
};

export default ThemedButton;