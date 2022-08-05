import React from "react";

const Pagination = (props) => {
  const { prevData, nextData, currentPage } = props;

  const handlePrevData = () => {
    prevData();
  };

  const handleNextData = () => {
    nextData();
  };

  return (
    <div className="d-right">
      <button
        disabled={currentPage === 1}
        onClick={handlePrevData}
        className={`btn btn-prev ${currentPage === 1 && "btn-disabled"}`}
      >
        Prev
      </button>
      <button onClick={handleNextData} className="btn btn-next">
        Next
      </button>
    </div>
  );
};

export default Pagination;
