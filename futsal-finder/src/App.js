import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import LoginPage from './Pages/LoginPage';
import SignupForm from './Pages/SignupForm';
import Dashboard from './Pages/Dashboard';
import Fcourt from './Pages/court';
import Booking from './Pages/Booking';
import OwnerPage from './Pages/OwnerPage';
import Home from './Pages/Home';
import Schedule from './Pages/Schedule';
import PostStatus from './Pages/PostStatus';
import { UserContextProvider } from './Pages/UserContext';
import ProfileView from './Pages/ProfileView';
import AdminSignupForm from './Pages/AdminSignupform';
import AgentLoginPage from './Pages/AgentLoginPage'; // Add import for AgentLoginPage
import PlayerLoginPage from './Pages/PlayerLoginPage';
function App() {
  return (
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/court" element={<Fcourt />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/player" element={<PlayerLoginPage />} />
        <Route path="/login/agent" element={<AgentLoginPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/agentsignup" element={<AdminSignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ownerpage" element={<OwnerPage />} />
        <Route path="/ownerpost" element={<PostStatus />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/profile" element={<ProfileView />} />

      </Routes>
    </UserContextProvider>
  );
}

export default App;
