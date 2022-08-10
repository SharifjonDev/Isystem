import React, { useState, useReducer } from "react";

const initialEmails = [
  {
    id: 1,
    email: "ozod@gmail.com",
    isValid: true,
  },
  {
    id: 2,
    email: "alish@gmail.com",
    isValid: true,
  },
  {
    id: 3,
    email: "omad@gmail.com",
    isValid: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log("click");
      if (action.value.includes("@")) {
        const newEmail = {
          id: Math.random(),
          email: action.value,
          isValid: true,
        };
        return [newEmail, ...state];
      }
      return state;
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT":
      const idx = state.findIndex((item) => item.id === action.id);
      state[idx].email = action.value;
      return state;
    default:
      return state;
  }
};

function Test() {
  const [emailValue, setEmailValue] = useState({ id: null, email: "" });
  const [emails, dispatch] = useReducer(reducer, initialEmails);

  const handleChange = (event) => {
    setEmailValue((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };

  const handleSubmit = (event, type = "ADD", id = null) => {
    event.preventDefault();
    if (emailValue.email.trim().length <= 0) return;
    if (emailValue.id) {
      dispatch({ type: "EDIT", value: emailValue.email, id: emailValue.id });
    }
    if (emailValue.id === null) {
      dispatch({ type: "ADD", value: emailValue.email });
    }
    setEmailValue({
      id: null,
      email: "",
    });
  };

  const deleteHandle = (id) => {
    if (!id) return;
    dispatch({ type: "DELETE", id });
  };

  const editHandle = (item) => {
    if (!item.id) return;
    setEmailValue({ id: item.id, email: item.email });
  };

  return (
    <React.Fragment>
      <div className="main-block">
        <form onSubmit={handleSubmit}>
          <input
            value={emailValue.email}
            onChange={handleChange}
            type="text"
            placeholder="email"
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {emails.map((item, index) => (
            <li key={index}>
              {item.email}
              <button onClick={() => editHandle(item)}>Edit</button>
              <button onClick={() => deleteHandle(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Test;
