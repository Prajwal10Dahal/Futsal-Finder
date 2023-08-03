import React, { useState } from 'react';
import './OwnerPage.css';

function OwnerPage() {
  const [bookings, setBookings] = useState([]);

  const handleBookingUpdate = (bookingId, newTime) => {
    // Update the booking with the new time
    const updatedBookings = bookings.map(booking => {
      if (booking.id === bookingId) {
        return { ...booking, time: newTime };
      }
      return booking;
    });

    setBookings(updatedBookings);
  };

  return (
    <div className="owner-page-container">
      <div className="owner-sidebar">
        <h2 className="owner-sidebar-heading">Menu</h2>
        <ul className="owner-sidebar-menu">
        
          <li className="owner-sidebar-menu-item active"><a className='menu-items' href='ownerookings'>Bookings</a></li>
          <li className="owner-sidebar-menu-item"><a className='menu-items' href='ownerschedule'>Schedule</a></li>
          <li className="owner-sidebar-menu-item"><a className='menu-items' href='ownerpost'>Post Status</a></li>
        </ul>
      </div>
      <div className="owner-content">
        <h1 className="owner-page-heading">Futsal Owner Page</h1>
        <div className="booking-list">
          <h2 className="section-heading">Bookings</h2>
          {bookings.length === 0 ? (
            <p className="no-bookings">No bookings available</p>
          ) : (
            <ul className="booking-items">
              {bookings.map(booking => (
                <li className="booking-item" key={booking.id}>
                  <div className="booking-details">
                    <p className="booking-time">Time: {booking.time}</p>
                    <p className="booking-customer">Customer: {booking.customer}</p>
                  </div>
                  <div className="booking-update">
                    <input
                      type="text"
                      placeholder="New time"
                      className="booking-time-input"
                      onChange={e => handleBookingUpdate(booking.id, e.target.value)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default OwnerPage;

