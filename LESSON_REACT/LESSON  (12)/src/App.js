import React, { Fragment, useEffect, useReducer, useState } from "react";
import Container from "./UI/Container/Container";
import Main from "./layout/Main/Main";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import { RAPID_API_KEY } from "./constants/index";
import AllMovies from "./components/AllMovies/AllMovies";
import { ToastContainer, toast } from "react-toastify";
import Test from "./components/Test/Test";

const initialData = {
  movies: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      const updatedState = {
        movies: action.movies,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
      };
      return updatedState;
    case "LOADING_START":
      return {
        movies: state.movies,
        isLoading: true,
        errorMessage: state.errorMessage,
      };
    case "LOADING_FINISH":
      return {
        movies: state.movies,
        isLoading: false,
        errorMessage: state.errorMessage,
      };
    default:
      return state;
  }
};

function App() {
  const [resData, dispatch] = useReducer(reducer, initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies(searchValue = search, page = currentPage) {
    try {
      dispatch({ type: "LOADING_START" });

      let res;
      const header = {
        method: "GET",
        headers: {
          "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY,
        },
      };

      if (searchValue.trim().length !== 0) {
        res = await fetch(
          `https://data-imdb1.p.rapidapi.com/titles/search/title/${searchValue}?info=mini_info&limit=${limit}&page=${page}&titleType=movie`,
          header
        );
      }

      if (searchValue.trim().length === 0) {
        res = await fetch(
          `https://data-imdb1.p.rapidapi.com/titles?info=mini_info&limit=${limit}&page=${page}&titleType=movie&genre=Action&year=2022`,
          header
        );
      console.log(res)

      }

      if (!res.ok) {
        throw new Error("Something went wrong " + res.status);
      }
      const data = await res.json();
      dispatch({
        type: "FETCHING",
        movies: data.results,
        limit: data.entries,
        currentPage: data.page,
      });
    } catch (err) {
      toast.error(err.message);
    }
    dispatch({ type: "LOADING_FINISH" });
  }

  const handleSearch = (value) => {
    setSearch(value);
    fetchMovies(value);
  };

  const prevData = () => {
    setCurrentPage((prevState) => prevState - 1);
    setNextPage((prevState) => prevState - 1);
    fetchMovies(search, currentPage - 1);
  };

  const nextData = () => {
    setCurrentPage((prevState) => prevState + 1);
    setNextPage((prevState) => prevState + 1);
    fetchMovies(search, currentPage + 1);
  };

  return (
    <Fragment>
      <Main>
        <Container>
          <div className="d-center">
            <Search handleSearch={handleSearch} />
            <Pagination
              currentPage={currentPage}
              prevData={prevData}
              nextData={nextData}
            />
          </div>
          <div className="row">
           {resData.isLoading && "Loading..."}
          {!resData.isLoading && <AllMovies resData={resData} />}
          <AllMovies resData={resData} />
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
