import React, { useReducer, useRef, useState } from "react";

const initialEmails = [
  {
    id: 1,
    email: "ali@gmail.com",
    isActive: true,
  },
  {
    id: 2,
    email: "vali@gmail.com",
    isActive: false,
  },
  {
    id: 3,
    email: "karim@gmail.com",
    isActive: true,
  },
];

const checkEmail = (email) => {
  if (!email.includes("@")) {
    alert("Invalid email!!!!");
    return false;
  }
  return true;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!checkEmail(action.value.email)) {
        return state;
      }
      const email = {
        id: Math.random(),
        email: action.value.email,
        isActive: action.value.isActive,
      };
      return [email, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "EDIT":
      if (!checkEmail(action.value.email)) {
        return state;
      } // DRY => Do not Repeat Yourself
      const idx = state.findIndex((item) => item.id === action.value.id);
      state[idx] = action.value;
      return [...state];
    default:
      return state;
  }
};

const Emails = () => {
  const [emailsList, dispatch] = useReducer(reducer, initialEmails);
  const [currentEmail, setCurrentEmail] = useState(null);
  const emailRef = useRef();
  const activeRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmail = {
      email: emailRef.current.value,
      isActive: activeRef.current.checked,
    };

    if (currentEmail) {
      dispatch({
        type: "EDIT",
        value: {
          id: currentEmail.id,
          email: emailRef.current.value,
          isActive: activeRef.current.checked,
        },
      }); // payload bu { type: "EDIT", value: newEmail }
    }

    if (!currentEmail) {
      dispatch({ type: "ADD", value: newEmail });
    }

    emailRef.current.value = "";
    activeRef.current.checked = false;
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const handleEdit = (item) => {
    setCurrentEmail(item);
    emailRef.current.value = item.email;
    activeRef.current.checked = item.isActive;
  };

  const fetchEmails = () => {
    if (emailsList.length > 0) {
      return emailsList.map((item, index) => (
        <li key={index} className={!item.isActive ? "notActive" : ""}>
          {item.email}
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ));
    }

    return <div>NO EMAILS...</div>;
  };

  return (
    <div className="margin-width">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          ref={emailRef}
          id="email"
          required
          type="text"
          placeholder="john@gmail.com"
        />
        <label htmlFor="isActive">Active:</label>
        <input ref={activeRef} id="isActive" type="checkbox" />
        <button type="submit">Submit</button>
      </form>
      <ul>{fetchEmails()}</ul>
    </div>
  );
};

export default Emails;
