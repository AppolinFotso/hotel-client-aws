import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import LoadingPage from "./LoadingPage.js";

//
const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];
//
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contact={contact} />
    </div>
  );
};

export default App;
