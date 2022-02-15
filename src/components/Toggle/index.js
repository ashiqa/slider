// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import { ToggleContainer } from "./Toogle.styled";
import { ReactComponent as MoonIcon } from "./Icons/moon.svg";
import { ReactComponent as SunIcon } from "./Icons/sun.svg";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme} themeName={theme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
