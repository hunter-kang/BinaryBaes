import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Profile_Card.css";
import "../styles/Text.css";

const Profile_Card = ( {profile, onMatchClick}) => {
    console.log(profile.firstname)
    return (
      <div className="profile-card" style={{ marginTop: 60 }}>
        <div className="rectangle-profile">
            {/* display_profile_image_here */}
            <img className="photo"
          src={profile.profilePicture}
          alt={`${profile.firstname}'s Profile`}
          />
          <div className="small-text" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '30px', marginTop: '350px'}}>
            <div>Name: {profile.firstname || 'N/A'}</div>
            <div>Age: {profile.age|| 'N/A'}</div>
            <div>Height: {profile.height || 'N/A'}</div> 
            <div>School: {profile.school || 'N/A'}</div>
            <div>Employment: {profile.employmentStatus}</div>
            {/* backend_insert_here */}
          </div>
        </div>
        <button className="button-design" onClick={() => onMatchClick("0")}>
            0
          </button>
        <button className="button-design" onClick={() => onMatchClick("1")} style={{ marginLeft: 100, marginTop: 20}}>
            1
        </button>
      </div>
    );
  };

export default Profile_Card;
