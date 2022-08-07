import React from "react";
import "./Card.css";
const Card = props => {
  const { country } = props;
  return (
    <div className="card">
      <img className="img" src={country?.flag} alt={country?.name} />
      <div className="title">
        <h1>{country?.name}</h1>
        <h3>Capital: {country?.capital}</h3>
        <h4>Region: {country?.region}</h4>
        <h5>Popilation: {country?.population}</h5>
        <h6>Area: {country?.area}km kv</h6>
        <p>Call code: +{country?.callingCodes}</p>
      </div>
    </div>
  );
};

export default Card;
