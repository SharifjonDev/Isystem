import React, { Fragment } from "react";
import Col from "../../layout/Col/Col";
import Card from "../../components/Card/Card";

const AllMovies = (props) => {
  const { resData } = props;

  // if (resData.movies.length > 0) {
  //   return resData.movies.map((item, index) => (
  //     <Col key={index}>
  //       <Card isLoading={resData.isLoading} movie={item} />
  //     </Col>
  //   ));
  // }

  // return <div>No data</div>;

  return resData.movies.map((item, index) => (
    <Col key={index}>
      <Card isLoading={resData.isLoading} movie={item} />
    </Col>
  ));
};

export default AllMovies;
