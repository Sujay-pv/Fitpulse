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


  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let today = day + '/' + month + '/' + year;
  today = today.toString();
  today = today.slice(6, 10)+'-'+today.slice(3,5)+'-'+today.slice(0,2);



  return (
    <div id="booking-container">
      <div id="booking-container-inside">
        
    <form  id="form-booking" onSubmit={handleSubmit}>
    <h1 id="gymbookingheading">Pulse Pass</h1>
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
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="12 Months">12 Months</option>
        </select>
      </div>
      <div className="booking-section">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          min={today}
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
