import React, { useReducer, useEffect } from "react";
import Email from "./components/Email/Email";
import Container from "./UI/Container";

const initialLaptops = [
  {
    isLoading: false,
    email: [],
    errorMessage: "",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { email: action.email };
    default:
      return state;
  }
};

function App() {
  const [emails, dispatch] = useReducer(reducer, initialLaptops);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      if (!response.ok) {
        throw new Error("Someething went wrong" + response.status);
      }
      const data = await response.json();
      dispatch({ type: "FETCHING", email: data });
    } catch (error) {
      console.log("Error" + error.message);
    }
  }

  return (
    <div className="App">
      <Container>
        <Email email={emails.email} />
      </Container>
    </div>
  );
}

export default App;
