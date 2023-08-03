import React, { useState } from 'react';
import './AdminSignupform.css';
import axios from 'axios';
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
function AdminSignupForm() {
  const [futsalName, setFutsalName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserData } = useUserContext();
  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();

    // Perform signup validation here

    if (futsalName && contact && email && address && name && password) {
  
      let data = JSON.stringify({
        futsalName: futsalName,
        name: name,
        address: address,
        email: email,
        password: password,
        phone: contact,
      });

      console.log(data);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/users/agent',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          if (response.status === 200) {
            alert('Signup successful!');
            // Store the signup data in the context
            setUserData({
              futsalName: futsalName,
        username: name,
        address: address,
        email: email,
        
        phone: contact,
            });
            // Redirect to the dashboard page after successful signup
            navigate('/ownerpage');
          }
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert('Cannot Signup');
          console.log(error);
        });
    } else {
      // Signup failed
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="admin-signup-container">
      <h1 className="admin-signup-heading">Admin Signup</h1>
      <form onSubmit={handleSignup} className="admin-signup-form">
        <div className="admin-signup-input">
          <label htmlFor="futsalName">Futsal Name:</label>
          <input
            type="text"
            id="futsalName"
            value={futsalName}
            onChange={(e) => setFutsalName(e.target.value)}
          />
        </div>
        <div className="admin-signup-input">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="admin-signup-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="admin-signup-input">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="admin-signup-input">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="admin-signup-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="admin-signup-button">
          Register Futsal Id
        </button>
      </form>
    </div>
  );
}

export default AdminSignupForm;
