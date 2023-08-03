import React from 'react'
import './Home.css';

export default function Home() {
  return(
      <div className="homepage">
        <div className="homepage-header">
          <h1 className="homepage-heading">Welcome to Futsal Finder</h1>
          <p className="homepage-subheading">Manage Your Futsal Activities with Ease</p>
        </div>
        <div className="homepage-content">
          <div className="homepage-section">
            <h2 className="homepage-section-heading">Schedule Management</h2>
            <p className="homepage-section-description">
              Plan and book matches effortlessly. Create schedules, set match timings, and keep track of upcoming games.
            </p>
          </div>
          <div className="homepage-section">
            <h2 className="homepage-section-heading">Search courts</h2>
            <p className="homepage-section-description">
          Search best courts for you and your team available in your city or area. 
            </p>
          </div>
          <div className="homepage-section">
            <h2 className="homepage-section-heading">Player Profiles</h2>
            <p className="homepage-section-description">
              Maintain individual player profiles. Track performance, stats, and achievements of your team members.
            </p>
          </div>
        </div>
        <div className="homepage-footer">
          <p className="homepage-footer-text">Sign up or log in to get started!</p>
        </div>
      </div>
    );
  }
  

  
  

