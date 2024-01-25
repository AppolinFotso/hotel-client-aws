import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    fetch(`https://hotel-server-x6k7.onrender.com/${props.info}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCustomer(data);
      });
  }, [props.info]);
  if (customer == "") {
    return "";
  }
  return (
    <div className="customerProfile">
      <div className={props.toggleClassName}>
        <p className="customerName">
          {customer[0].firstname} {customer[0].surname}
        </p>
        <p>ID: {props.info}</p>
        <p>Email: {customer[0].email}</p>
        <p>VIP: {customer[0].vip ? "Yes" : "No"}</p>
        {/* <p>Tel: {customer.phoneNumber}</p> */}
      </div>
    </div>
  );
}

export default CustomerProfile;
