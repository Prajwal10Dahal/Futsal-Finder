import React, { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Fetch schedule data from the server
    fetch('/api/schedule')
      .then(response => response.json())
      .then(data => setSchedule(data));
  }, []);

  const handleUpdate = (id, status) => {
    // Update schedule status on the server
    fetch(`/api/schedule/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then(response => response.json())
      .then(data => {
        // Update the local schedule data with the updated status
        const updatedSchedule = schedule.map(item => {
          if (item.id === id) {
            return { ...item, status: data.status };
          }
          return item;
        });
        setSchedule(updatedSchedule);
      });
  };

  return (
    <div className="schedule-container">
      <h2 className="schedule-heading">Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(item => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.status}</td>
              <td>
                {item.status === 'booked' && (
                  <button
                    className="schedule-btn"
                    onClick={() => handleUpdate(item.id, 'available')}
                  >
                    Mark Available
                  </button>
                )}
                {item.status === 'available' && (
                  <button
                    className="schedule-btn"
                    onClick={() => handleUpdate(item.id, 'booked')}
                  >
                    Mark Booked
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
