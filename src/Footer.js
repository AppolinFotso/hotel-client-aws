import React from "react";

function Footer(props) {
  const contactList = props.contact.map((contact) => {
    return <li key={contact}>{contact}</li>;
  });
  return (
    <div className="footer">
      <ul>{contactList}</ul>
    </div>
  );
}

export default Footer;
