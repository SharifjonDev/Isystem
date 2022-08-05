import React, { useState } from "react";

const Greeting = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1>Hello World!</h1>
      {!isClicked && <p>Not clicked.</p>}
      {isClicked && <p>Clicked.</p>}
      <button onClick={handleClick} className="btn btn-danger">
        Click me
      </button>
    </div>
  );
};

export default Greeting;
