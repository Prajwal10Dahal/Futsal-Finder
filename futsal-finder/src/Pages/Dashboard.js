import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useUserContext } from './UserContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ProfileView from './ProfileView';

function Logout() {
  const { setUserData } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout actions (e.g., clearing user data from context or local storage)
    setUserData(null); // Clear the user data in the context
    localStorage.removeItem('userData'); // Clear user data from local storage if used
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function Dashboard() {
  const { userData } = useUserContext();
  const [playerData, setPlayerData] = useState({
    playerName: '',
    contact: '',
    email: '',
    playingPosition: '',
    teamName: '',
    teamLogo: '',
    location: '',
    photo: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      fetchUserProfile(userData.username);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    // Photo upload handling
    // ...
  };

  const handleSaveProfile = async () => {
    try {
      const response = await axios.post('/users/profile', playerData);
      console.log(response.data); // Check the response data
      setPlayerData(response.data); // Update the playerData state with the response data
      // Optionally, show a success message to the user
      // Redirect to the dashboard page after successful save
      navigate('/dashboard'); // Use the navigate function to redirect
    } catch (error) {
      console.error(error);
      // Optionally, show an error message to the user
    }
  };

  const fetchUserProfile = (username) => {
    axios
      .get(`/users/profile/${username}`)
      .then((response) => {
        if (response.data) {
          setPlayerData(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">{/* Sidebar content */}</div>
      <div className="main-content">
        {userData ? (
          <div className="user-info">
            <>
              <h2 className="user-name">Welcome, {userData.username}!</h2>
              <p className="user-email">Email: {userData.email}</p>
              <p className="user-contact">Contact: {userData.contact}</p>
              <Link to="/profile">View Profile</Link>
              <Logout /> {/* Show the Logout button when the user is authenticated */}
            </>
          </div>
        ) : (
          <div className="user-info">
            <>
              <h2 className="user-name">Create Your Profile</h2>
              <form className="profile-form">
                {/* ... Other input fields ... */}
                <button type="button" onClick={handleSaveProfile}>
                  Save Profile
                </button>
              </form>
            </>
          </div>
        )}

        {userData && <ProfileView playerData={playerData} />}
      </div>
    </div>
  );
}

export default Dashboard;
