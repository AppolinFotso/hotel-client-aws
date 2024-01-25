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
        <td>{props.booking.firstname}</td>
        <td>{props.booking.surname}</td>
        <td>{props.booking.email}</td>
        <td>{props.booking.room_id}</td>
        <td>{moment(props.booking.check_in_date).format("YYYY - MM - DD")}</td>
        <td>{moment(props.booking.check_out_date).format("YYYY - MM - DD")}</td>
        <td>
          {moment(props.booking.check_out_date).diff(
            moment(props.booking.check_in_date),
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
