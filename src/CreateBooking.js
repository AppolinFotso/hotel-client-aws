import React, { useState } from "react";

function CreateBooking(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");

  const [firstName, setFirstName] = useState("");

  const [surname, setSurname] = useState("");

  const [email, setEmail] = useState("");

  const [roomId, setRoomId] = useState(0);

  const [checkin, setCheckin] = useState("");

  const [checkout, setCheckout] = useState("");
  const customerInfo = [
    {
      id: id,
      title: title,
      firstname: firstName,
      surname: surname,
      email: email,
      room_id: roomId,
      check_in_date: checkin,
      check_out_date: checkout,
    },
  ];
  return (
    <div className="createBooking">
      <h4>Create Bookings</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (customerInfo.id != 0) {
            fetch("http://localhost:3000", {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(customerInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                props.getCustomerinfo(data);
              });
          }
        }}
      >
        <ul>
          <li className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              className="form-control"
              id="id"
              type="number"
              required
              aria-describedby="customer ID"
              placeholder="Enter ID"
              name="id"
              onChange={(e) => setId(e.target.value)}
            />
          </li>
          <li className="form-group">
            <label htmlFor="title">Title:</label>

            <input
              className="form-control"
              id="title"
              type="text"
              required
              aria-describedby="customer title"
              placeholder="Enter Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>

          <li className="form-group">
            <label htmlFor="firstname">firstName:</label>

            <input
              className="form-control"
              id="firstname"
              type="text"
              required
              aria-describedby="customer firstname"
              placeholder="Enter firstName"
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </li>
          <li className="form-group">
            <label htmlFor="surname">Surname:</label>

            <input
              className="form-control"
              id="surname"
              type="text"
              required
              aria-describedby="customer surname"
              placeholder="Enter Surname"
              name="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </li>

          <li className="form-group">
            <label htmlFor="email">Email:</label>

            <input
              className="form-control"
              id="email"
              type="email"
              required
              aria-describedby="customer email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li className="form-group">
            <label htmlFor="roomId">Room ID:</label>

            <input
              className="form-control"
              id="roomId"
              type="number"
              required
              aria-describedby="customer room ID"
              placeholder="Enter Room ID"
              name="roomId"
              onChange={(e) => setRoomId(e.target.value)}
            />
          </li>

          <li className="form-group">
            <label htmlFor="checkin">Check in:</label>

            <input
              className="form-control"
              id="checkin"
              type="date"
              required
              name="checkin"
              onChange={(e) => setCheckin(e.target.value)}
            />
          </li>
          <li className="form-group">
            <label htmlFor="checkout">Check out:</label>

            <input
              className="form-control"
              id="checkout"
              type="date"
              required
              name="checkout"
              onChange={(e) => setCheckout(e.target.value)}
            />
          </li>
          <li>
            <button className=" btn btn-primary form-control" type="submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreateBooking;
