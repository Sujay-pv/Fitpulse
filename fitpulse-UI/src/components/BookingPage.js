import React, { useState } from "react";
import "./css-files/bookingpage.css";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gymLocation, setGymLocation] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({
      name,
      email,
      number,
      gymLocation,
      membershipType,
      startDate
    });
  };

  return (
    <div id="booking-container">
      <div id="booking-container-inside">
    <form  id="form-booking" onSubmit={handleSubmit}>
      <h2 id="gymbookingheading">Gym Booking</h2>
      <div className="booking-section">
       {/* <label htmlFor="name">Name:</label>*/}
        <input
          type="text"
          id="bookingname"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="booking-section">
        {/*<label htmlFor="email">Email:</label>*/}
        <input
          type="email"
          id="bookingemail"
          value={email}
          placeholder="Email id"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="booking-section">
        {/*<label htmlFor="number">Number:</label>*/}
        <input
          type="tel"
          id="bookingnumber"
          value={number}
          placeholder="Mobile Number"
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
      <div className="booking-section">
        <label htmlFor="gymLocation">Gym Location</label>
        <select
          id="gymlocation"
          value={gymLocation}
          onChange={(event) => setGymLocation(event.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Jayanagar">Jayanagar</option>
          <option value="Banashankari">Banashankari</option>
          <option value="BTM Layout">BTM Layout</option>
        </select>
      </div>
      <div className="booking-section">
        <label htmlFor="membershipType">Membership Type</label>
        <select
          id="membershipType"
          value={membershipType}
          onChange={(event) => setMembershipType(event.target.value)}
        >
          <option value="">--Select--</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="booking-section">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div id="gymbookingbtnsec">
      <button id = "gymbookingbtn" type="submit">Book Now</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default BookingPage;
