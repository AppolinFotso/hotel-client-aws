import { nanoid } from "nanoid";
import React, { useState } from "react";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";
function SearchResults(props) {
  const [customerId, setCustomerId] = useState(0);
  function getCustomerId(id) {
    setCustomerId(id);
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
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        {bookingList}
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
}

export default SearchResults;
