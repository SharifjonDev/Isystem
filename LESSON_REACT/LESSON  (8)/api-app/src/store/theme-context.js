import React from "react";

const ThemeContext = React.createContext({
  isLight: window.matchMedia("(prefers-color-scheme: light)").matches,
});

export default ThemeContext;
