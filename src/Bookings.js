import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CreateBooking from "./CreateBooking.js";
import SomethingWentWrong from "./SomethingWentWrong.js";
import LoadingPage from "./LoadingPage.js";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const [ifSearchInputIsEmpty, setForEmptyInput] = useState(0);
  const [newBooking, setNewBooking] = useState("false");

  useEffect(() => {
    fetch("https://hotel-server-x6k7.onrender.com")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTimeout(() => {
          setBookings(data);
        }, 5000);
      })
      .catch((error) => {
        const urlError = "error";
        setBookings(urlError);
      });
  }, [ifSearchInputIsEmpty, newBooking]);

  //

  const search = (searchVal) => {
    // console.info("TO DO!", searchVal);
    const newBookings = bookings.filter(
      (result) =>
        result.firstname.toLowerCase().includes(searchVal.toLowerCase()) ||
        result.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    if (newBookings.length == 0) {
      return "";
    } else {
      setBookings(newBookings);
    }
  };
  // load error page
  if (bookings === "error") {
    return <SomethingWentWrong />;
  }
  // load waiting page
  if (bookings.length === 0) {
    return <LoadingPage />;
  }
  //
  else {
    return (
      <div className="App-content">
        <div className="newBooking">
          <CreateBooking getCustomerinfo={setNewBooking} />
        </div>
        <div className="container">
          <Search search={search} emptyInput={setForEmptyInput} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;
