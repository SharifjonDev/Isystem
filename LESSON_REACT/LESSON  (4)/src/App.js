import React, { Fragment, useReducer, useEffect, useState } from "react";
import Allcountries from "./components/AllCountries/AllCountries";
import Search from "./components/Search/Search";
import Main from "./layout/Main/Main";
import Container from "./UI/Container/Container";
import { ToastContainer, toast } from "react-toastify";

const initialCountries = {
  loading: false,
  countries: [],
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      const updetedState = {
        loading: state.loading,
        countries: action.countries,
        errorMessage: "",
      };
      return updetedState;
    case "LOADING_START":
      return {
        countries: state.countries,
        loading: true,
        errorMessage: state.errorMessage,
      };
    case "LOADING_FINISH":
      return {
        countries: state.countries,
        loading: false,
        errorMessage: state.errorMessage,
      };
    case "ERROR":
      return {
        loading: state.loading,
        countries: state.countries,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

function App() {
  const [countriesData, dispatch] = useReducer(reducer, initialCountries);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(search = searchValue) {
    dispatch({ type: "LOADING_START" });
    try {
      let res;
      const methods = {
        method: "GET",
      };
      if (search.trim().length !== 0) {
        res = await fetch(
          `https://restcountries.com/v2/name/${search}`,
          methods
        );
      }

      if (search.trim().length === 0) {
        res = await fetch("https://restcountries.com/v2/all", methods);
      }

      if (!res.ok) {
        throw new Error(res.status);
      }

      const data = await res.json();
      dispatch({ type: "FETCHING", countries: data });
      toast.success("It is working");
    } catch (err) {
      toast.error(err.message);
      dispatch({ type: "ERROR", errorMessage: err.message });
    }
    dispatch({ type: "LOADING_FINISH" });
  }

  const handleSearch = value => {
    setSearchValue(value);
    fetchData(value);
  };
  return (
    <Fragment>
      <Main>
        <Container>
          <div className="d-center">
            <Search handleSearch={handleSearch} />
          </div>
          <div className="row">
            {countriesData.loading && "Loading ..."}
            {!countriesData.loading && (
              <Allcountries countriesData={countriesData} />
            )}
          </div>
        </Container>
      </Main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
