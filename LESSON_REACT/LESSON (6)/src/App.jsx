import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import Navbar from "./layout/Navbar";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/SignIn/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from "./store/auth/auth-actions";
import Home from "./components/Home/Home";
import Greeting from "./components/Greeting/Greeting";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);
  React.useEffect(() => {
    dispatch(signInWithGoogle());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isLogged && user?.name && <Navbar />}
      <Routes>
        {isLogged && (
          <Route path="/">
            <Route index element={<Home />} />
            {user?.name && <Route path="add-blog" element={<AddBlog />} />}
            {user?.name && <Route path="greeting" element={<Greeting />} />}
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        )}

        {isLoading && "Loading..."}
        {!isLoading && "No Data"}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
