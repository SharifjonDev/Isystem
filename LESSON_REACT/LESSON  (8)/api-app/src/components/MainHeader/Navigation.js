import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import ThemeContext from "../../store/theme-context";

const Navigation = (props) => {
  const themeCtx = useContext(ThemeContext);

  console.log(themeCtx.isLight);

  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
