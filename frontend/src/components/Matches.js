import React, { useEffect, useState } from 'react';
import "../styles/Matches.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';
import Connect_Card from '../components/Connect_Card';

const handleMatchClick = (name) => {
    console.log(`Matched with: ${name}`);
};

function Matches() {
    const fakeProfiles = [
        { name: "John Doe", linkedIn: "john_doe" },
        { name: "Jane Smith", linkedIn: "jane_smith" },
        { name: "Sam Wilson", linkedIn: "sam_wilson" },
        { name: "Hello Wilson", linkedIn: "YO_wilson" },
        { name: "Hello Wilson", linkedIn: "YO_wilson" },
        { name: "Hello Wilson", linkedIn: "YO_wilson" },
        { name: "Hello Wilson", linkedIn: "YO_wilson" }
      ];
   return (
       <div className="background-container">
           <p className="header" style={{marginTop: 30, marginRight: 640}} >Connect</p>
           <div className = "dashed-rectangle">
            {fakeProfiles.map((profile) => (
            <Connect_Card key={profile.name} profile={profile} onMatchClick={handleMatchClick} /> ))}
            </div>
           <TaskBar page="Matches" />
       </div>
   );
};


export default Matches;