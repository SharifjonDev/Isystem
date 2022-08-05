import React from "react";

function Greeting() {
  const [isCliked, setIsCliked] = React.useState(false);

  const handleClick = () => {
    setIsCliked((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1>Hello World!</h1>
      {!isCliked && <p>Not clicked.</p>}
      {isCliked && <p>Cliked.</p>}
      <button onClick={handleClick} className="btn btn-danger">
        Click me
      </button>
    </div>
  );
}

export default Greeting;
