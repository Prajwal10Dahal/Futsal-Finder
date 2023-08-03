import React from 'react';

function ProfileView({ playerData }) {
  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Player Profile</h1>
      <p>Username: {playerData.playerName}</p>
      <p>Email: {playerData.email}</p>
      <p>Contact: {playerData.contact}</p>
      <p>Playing Position: {playerData.playingPosition}</p>
      <p>Team Name: {playerData.teamName}</p>
      <p>Location: {playerData.location}</p>
      {playerData.photo && <img src={playerData.photo} alt="Player" />}
    </div>
  );
}

export default ProfileView;
