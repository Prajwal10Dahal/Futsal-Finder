import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <div className="login-buttons">
        <Link to="/login/player" className="login-button">
          Player Login
        </Link>
        <Link to="/login/agent" className="login-button">
          Futsal Login
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
