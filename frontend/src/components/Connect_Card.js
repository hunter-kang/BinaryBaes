import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Connect_Card.css";
import "../styles/Text.css";


const Connect_Card = ({ profile, onConnectClick}) => {
  return (
    <button
      className="rectangle-connect"
      onClick={() => onConnectClick(profile.name)}
    >
      <span className="small-text">{profile.linkedIn}</span>
      <span>{profile.name}</span> 
    </button>
  );
};
export default Connect_Card;