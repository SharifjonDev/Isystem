import React, { useContext } from "react";
import ThemeContext from "./theme-context";

const ThemeContextProvider = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <ThemeContext.Provider
      value={{
        isLight: themeCtx.isLight,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
