import React, { Fragment, useRef } from "react";
import "./Search.css";
const Search = props => {
  const { handleSearch } = props;
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(inputRef.current.value);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="search" />
        <input
          ref={inputRef}
          id="search"
          type="search"
          placeholder="Countries"
        />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Search;
