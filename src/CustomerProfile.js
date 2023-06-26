import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.info}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  }, [props.info]);
  return (
    <div className="customerProfile">
      <div className={props.toggleClassName}>
        <p className="customerName">
          {customer.firstName} {customer.surname}
        </p>
        <p>ID: {props.info}</p>
        <p>Email: {customer.email}</p>
        <p>VIP: {customer.vip ? "Yes" : "No"}</p>
        <p>Tel: {customer.phoneNumber}</p>
      </div>
    </div>
  );
}

export default CustomerProfile;
