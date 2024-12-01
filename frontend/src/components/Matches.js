import React, { useEffect, useState } from 'react';
import "../styles/Matches.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';
import Connect_Card from '../components/Connect_Card';

const handleConnectClick = (name) => {
    console.log(`Matched with: ${name}`);
};

function Matches() {
    const [matches, setMatches] = useState([]);
   
    useEffect(() => {
     const fetchMatches = async () => {
         const token = localStorage.getItem('token'); // Replace with how you store the token
        
         if (!token) {
             console.error("No auth token found");
             return;
         }
         try {
             const response = await fetch('http://localhost:5555/user/getMatches', {
                 method: 'GET',
                 headers: {
                     'Authorization': `Bearer ${token}`,  
                     'Content-Type': 'application/json', 
                 },
             });
             if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
             }
             const data = await response.json();
             setMatches(data.matches || []);
         } catch (error) {
             console.error('Error fetching profile:', error);
         }
     };
     fetchMatches();
 }, []);
    console.log(matches)

    const fakeProfiles = [
        { name: "John Doe", linkedIn: "john_doe" },
        { name: "Jane Smith", linkedIn: "jane_smith" },
        { name: "Sam Wilson", linkedIn: "sam_wilson" },
        { name: "Hello Wilso", linkedIn: "YO_wilson" },
        { name: "Hello Wils", linkedIn: "YO_wilson" },
        { name: "Hello Wil", linkedIn: "YO_wilson" },
        { name: "Hello Wilson", linkedIn: "YO_wilson" }
      ];
   return (
       <div className="background-container">
           <p className="header" style={{marginTop: 30, marginRight: 640}} >Connect</p>
           <div className = "dashed-rectangle">
            {matches.map((profile) => (
            <Connect_Card key={profile.firstname} profile={profile} onConnectClick={handleConnectClick} /> ))}
            </div>
           <TaskBar page="Matches" />
       </div>
   );
};


export default Matches;