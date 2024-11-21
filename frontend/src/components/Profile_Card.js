import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Profile_Card.css";
import "../styles/Text.css";

const Profile_Card = ( {profile, onMatchClick}) => {
    return (
      <div className="profile-card" style={{ marginTop: 60 }}>
        <div className="rectangle-profile">
            {/* display_profile_image_here */}
          <div className="small-text" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '30px', marginTop: '350px'}}>
            <div>Name: {profile.Name}</div>
            <div>Age: {profile.Age}</div>
            <div>Height: {profile.Height}</div> 
            <div>School: {profile.School}</div>
            <div>Employment: {profile.Employment}</div>
            {/* backend_insert_here */}
          </div>
        </div>
        <button className="button-design" onClick={() => onMatchClick("1")}>
            0
          </button>
        <button className="button-design" onClick={() => onMatchClick("0")} style={{ marginLeft: 100, marginTop: 20}}>
            1
        </button>
      </div>
    );
  };

export default Profile_Card;
