import React, { useState } from 'react';
import './PostStatus.css';

function PostStatus() {
  const [photo, setPhoto] = useState(null);
  const [status, setStatus] = useState('');
  const [tournament, setTournament] = useState('');

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('status', status);
    formData.append('tournament', tournament);

    // Send form data to the server for further processing
    fetch('/api/futsal/post', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });

    // Clear the form fields after submission
    setPhoto(null);
    setStatus('');
    setTournament('');
  };

  return (
    <div className="futsal-post-container">
      <h2 className="futsal-post-heading">Post Futsal Updates</h2>
      <form className="futsal-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photo">Upload Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="tournament">Upcoming Tournament:</label>
          <input
            type="text"
            id="tournament"
            value={tournament}
            onChange={(e) => setTournament(e.target.value)}
          />
        </div>
        <button type="submit" className="futsal-post-btn" >
          Post
        </button>
      </form>
    </div>
  );
}


export default PostStatus;


  