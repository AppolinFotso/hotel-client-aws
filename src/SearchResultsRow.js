import React, { useState } from "react";
import moment from "moment";
function SearchResultsRow(props) {
  const [value, setValue] = useState("off");
  function handleClick() {
    if (value === "off") {
      setValue("on");
    } else {
      setValue("off");
    }
  }
  return (
    <tbody>
      <tr className={value} onClick={handleClick}>
        <th scope="row">{props.booking.id}</th>
        <td>{props.booking.title}</td>
        <td>{props.booking.firstName}</td>
        <td>{props.booking.surname}</td>
        <td>{props.booking.email}</td>
        <td>{props.booking.roomId}</td>
        <td>{props.booking.checkInDate}</td>
        <td>{props.booking.checkOutDate}</td>
        <td>
          {moment(props.booking.checkOutDate).diff(
            moment(props.booking.checkInDate),
            "days"
          )}
        </td>
        <td>
          <button
            onClick={() => props.getCustomerId(props.booking.id)}
            className="btn btn-primary"
          >
            Show Profile
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default SearchResultsRow;
