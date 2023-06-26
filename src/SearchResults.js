import { nanoid } from "nanoid";
import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";
import sortMe from "./sortTable";
function SearchResults(props) {
  const [customerId, setCustomerId] = useState(1);
  const [display, setDisplay] = useState("displayOff");

  function getCustomerId(id) {
    setCustomerId(id);
    if (display === "displayOff") {
      setDisplay("displayOn");
    } else {
      setDisplay("displayOff");
    }
  }
  const bookingList = props.results.map((booking) => {
    return (
      <SearchResultsRow
        booking={booking}
        getCustomerId={getCustomerId}
        key={nanoid()}
      />
    );
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              ID
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Title
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              First name
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Surname
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Email
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Room id
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Check in date
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Check out date
            </th>
            <th scope="col" onClick={(e) => sortMe(e.target.cellIndex)}>
              Nights
            </th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        {bookingList}
      </table>
      <CustomerProfile toggleClassName={display} info={customerId} />
    </div>
  );
}

export default SearchResults;
