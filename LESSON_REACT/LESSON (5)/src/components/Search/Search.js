import React, { Fragment, useRef } from "react";
import classes from "./Search.module.scss";

const Search = (props) => {
  const { handleSearch } = props;
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputRef.current.value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="search" />
        <input ref={inputRef} id="search" type="search" placeholder="Search" />
        <button type="submit" className={"btn"}>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
