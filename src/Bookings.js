import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then((response) => response.json())
  //     .then((data) => setBookings(data));
  // });
  const [bookings, setBookings] = useState(FakeBookings);
  const search = (searchVal) => {
    // console.info("TO DO!", searchVal);
    const newBookings = bookings.filter(
      (result) =>
        result.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        result.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(newBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
