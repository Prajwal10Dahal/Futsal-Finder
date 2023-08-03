import React, { useState } from 'react';
import './PlayerLoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PlayerLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      axios
        .post('http://localhost:5000/users/login', {
          name: username,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            // Assuming the login was successful
            navigate('/dashboard'); // Redirect to the dashboard page after successful login
          } else {
            setErrorMessage('Invalid username or password');
          }
        })
        .catch((error) => {
          setErrorMessage('Login failed');
          console.log(error);
        });
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Player Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <h6 className="new-account">
          <u>Don't have an Account?</u>
          <button type="Signup" className="signup">
            <a href="/signup">Sign Up for player</a>
          </button>
        </h6>
      </div>
    </div>
  );
}

export default PlayerLoginPage;
