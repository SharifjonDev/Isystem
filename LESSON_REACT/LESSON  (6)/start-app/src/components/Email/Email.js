import React from "react";

const Email = (props) => {
  console.log(props.email[0].email);
  if (props.email > 0) {
    return props.email.map((item, index) => (
      <div className="col" key={index}>
        <div className="card">{item.email}</div>
      </div>
    ));
  }
  return <div>No Data</div>;
};

export default Email;
