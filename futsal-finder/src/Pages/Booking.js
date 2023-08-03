
import React, { useState } from 'react';
import './Booking.css';
export default function Booking()  {
 
    const [bookingInfo, setBookingInfo] = useState({
      date: '',
      time: '',
      duration: ''
    });
  
    const [availableFutsals, setAvailableFutsals] = useState([]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setBookingInfo({ ...bookingInfo, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchAvailableFutsals();
    };
  
    const fetchAvailableFutsals = () => {
      const { date, time, duration } = bookingInfo;
  
      // Send a POST request to the backend with the selected date, time, and duration
      fetch('/api/available-futsals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time, duration }),
      })
        .then((response) => response.json())
        .then((data) => setAvailableFutsals(data))
        .catch((error) => console.log(error));
    };
  
    return (
      <div className="app">
        <h2 className="app-heading">Futsal Booking</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
                Date:
            <input
              type="date"
              name="date"
              value={bookingInfo.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={bookingInfo.time}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Duration (in hours):
            <input
              type="number"
              name="duration"
              value={bookingInfo.duration}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className="booking-button">
            Check Availability
          </button>
        </form>
  
        <div className="available-futsals">
          <h3 className="available-futsals-heading">Available Futsals</h3>
          {availableFutsals.length > 0 ? (
            availableFutsals.map((futsal) => (
              <div key={futsal.id} className="futsal-card">
                <h4>{futsal.name}</h4>
                <p>Location: {futsal.location}</p>
                <p>Price: ${futsal.price} per hour</p>
              </div>
            ))
          ) : (
            <p>No available futsals for the selected date and time.</p>
          )}
        </div>
      </div>
    );
  }
  

  