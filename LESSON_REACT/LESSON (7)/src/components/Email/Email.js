import React, { Fragment, useRef, useReducer, useState } from "react";
import Button from "../Button/Button";
import "./Email.css";

const initialEmail = [
  { id: 1, email: "Ali@gmail.com", isActive: true },
  { id: 2, email: "Vali@gmail.com", isActive: false },
  { id: 3, email: "Shaxrat@gmail.com", isActive: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const email = {
        id: Math.random(),
        email: action.value.email,
        isActive: action.value.isActive,
      };

      return [email, ...state];
    case "EDIT":
      const idx = state.findIndex((item) => item.id === action.value.id);
      state[idx] = action.value;
      return [...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
const Email = () => {
  const emailRef = useRef();
  const activeRef = useRef();
  const [emailList, dispatch] = useReducer(reducer, initialEmail);
  const [currentEmail, setCurrentEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmails = {
      email: emailRef.current.value,
      isActive: activeRef.current.checked,
    };

    if (!currentEmail) {
      dispatch({ type: "ADD", value: newEmails });
    }

    if (currentEmail) {
      dispatch({
        type: "EDIT",
        value: {
          id: currentEmail.id,
          email: emailRef.current.value,
          isActive: activeRef.current.checked,
        },
      });
    }
  };

  const handleEdit = (item) => {
    setCurrentEmail(item);
    emailRef.current.value = item.email;
    activeRef.current.checked = item.isActive;
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const fetchEmails = () => {
    if (emailList.length > 0) {
      return emailList.map((item, index) => (
        <div className={`col ${!item.isActive && "notActive"}`} key={index}>
          <h3>{item.email}</h3>
          <div>
            <Button onClick={() => handleEdit(item)} className={"btn-edit"}>
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              className={"btn-delete"}
            >
              Delete
            </Button>
          </div>
        </div>
      ));
    }
    return <div>NO Email...</div>;
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="Your Email..."
          />
          <label htmlFor="checked"></label>
          <input ref={activeRef} id="checked" type="checkbox" />
        </div>
        <Button className={"btn-submit"}>Submit</Button>
      </form>
      {fetchEmails()}
    </Fragment>
  );
};

export default Email;
