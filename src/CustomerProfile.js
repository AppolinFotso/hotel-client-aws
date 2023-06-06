import React from "react";

function CustomerProfile(props) {
  return (
    <div className="customerProfile">
      <div className={props.toggleClassName}>
        <p className="customerName">{props.info[0]}</p>
        <p>ID: {props.info[1]}</p>
        <p>Email: {props.info[2]}</p>
      </div>
    </div>
  );
}

export default CustomerProfile;
