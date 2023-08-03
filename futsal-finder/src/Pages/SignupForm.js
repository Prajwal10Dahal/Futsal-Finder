import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios';
import { useUserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './test5.jpg';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
   const [photo, setPhoto] = useState(null);
  const { setUserData } = useUserContext();
  const navigate = useNavigate();
  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleSignup = (event) => {
    event.preventDefault();

    if (username && email && contact && password) {

      let data = JSON.stringify({
        name: username,
        address: '',
        email: email,
        password: password,
        phone: contact,
      });

      console.log(data);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/users/register',
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
              username: username,
              email: email,
              contact: contact,
            });
            // Redirect to the dashboard page after successful signup
            navigate('/dashboard');
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
    <div className="signup-container">
      <h1 className="signup-heading">Futsal Finder Signup</h1>
      <form onSubmit={handleSignup} className="signup-form">
      <label>
          Username:   <br />

          <input
            type="text"
            value={username}
            
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Email:   <br />
          <input
            type="email"
            value={email}
           
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </label>
        
        <br />
        <label>
          Contact Number:   <br />
          <input
            type="number"
            value={contact}
            
            onChange={(e) => setContact(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password:   <br />
          <input
            type="password"
            value={password}
            placeholder='********'
            required
            minlength="6"
            maxlength="10"
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </label>
        
        <br />
        <button type="submit" className="signup-button">Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;