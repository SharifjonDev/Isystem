import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
// import ThemeContextProvider from "./store/theme-provider";
// import ThemeContext from "./store/theme-context";
// import Menu from "./components/Menu/Menu";
// import Button from "./components/UI/Button/Button";
// import Table from "./components/Table/Table";

// const DUMMY_DATA = ["osh", "shashlik", "Somsa"];
function App() {
  // console.log("APP Component");

  // const themeCtx = useContext(ThemeContext);

  const [isLoggedIn, setIsLoggedIn] = useState();
  // const [restaurantMenu, setRestaurantMenu] = useState(DUMMY_DATA);
  // const [isAdalt, setIsAdalt] = useState(false);

  // const handleAdult = () => {
  //   setIsAdalt((prevState) => !prevState);
  // };

  // const addFood = () => {
  //   setRestaurantMenu((prevState) => {
  //     return ["yangi taim", ...prevState];
  //   });
  // };

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    //
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
