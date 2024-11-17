import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Profile_Card.css";
import "../styles/Text.css";

const matchClick = (buttonName) => {
    if (buttonName === "1") console.log("match");
    //backend save to database of all the matches here
    else if (buttonName === "0") console.log("not match");
};
const Profile_Card = () => {
    return (
      <div className="profile-card" style={{ marginTop: 60 }}>
        <div className="rectangle-profile">
            {/* display_profile_image_here */}
          <div className="small-text" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '30px', marginTop: '350px'}}>
            <div>Name:</div>
            <div>Age:</div>
            <div>Height:</div> 
            <div>School:</div>
            <div>Employment:</div>
            {/* backend_insert_here */}
          </div>
        </div>
        <button className="button-design" onClick={() => matchClick("1")}>
            0
          </button>
        <button className="button-design" onClick={() => matchClick("0")} style={{ marginLeft: 100, marginTop: 20}}>
            1
        </button>
      </div>
    );
  };

export default Profile_Card;