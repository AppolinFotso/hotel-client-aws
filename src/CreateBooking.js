import React from "react";

function CreateBooking() {
  return (
    <div className="createBooking">
      <h4>Create Bookings</h4>
      <form>
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
            />
          </li>

          <li className="form-group">
            <label htmlFor="checkin">Check in:</label>

            <input className="form-control" id="checkin" type="date" required />
          </li>
          <li className="form-group">
            <label htmlFor="checkout">Check out:</label>

            <input
              className="form-control"
              id="checkout"
              type="date"
              required
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
