import React from "react";

function CustomerProfile(props) {
  return (
    <div className={props.display}>
      <p>Customer {props.id} profile</p>
    </div>
  );
}

export default CustomerProfile;
