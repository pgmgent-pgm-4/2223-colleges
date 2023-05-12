import React from 'react';
import { ThemeContext, useThemeContext } from '../contexts/theme.context';
import { useRef } from 'react';

const ThemedButton = () => {
  const myRef = useRef(0);

  const { isDarkMode, handleThemeChange } = useThemeContext();
  const handleClick = (ev) => {
    myRef.current++;
  };

  return (
    <button onClick={handleClick} type="button" className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}>Button</button>
  );
};

export default ThemedButton;