import React, { useState } from 'react';
import "../styles/Home.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';
import Profile_Card from '../components/Profile_Card';

function Home() {
    // backend logic to load in profiles here suggest doing random
    const [profiles, setProfiles] = useState([ 
        { Name: "WoodStock", Age: "Unknown", Height: "0.25ft", School: "Unschool", Employment: "Unemployed" },
        { Name: "Clifford", Age: "50", Height: "25ft", School: "idk", Employment: "Unemployed"}
    ]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const matchClick = (buttonName) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
        }, 500);  // 500ms (same as your animation duration)

        if (buttonName === "1") console.log("match");
        //backend save to database of all the matches here
        else if (buttonName === "0") console.log("not match");
    };
    return (
        <div className="home-container">
            <div className={`profile-card-container ${isAnimating ? 'animate-exit' : ''}`}>
                <Profile_Card
                    profile={profiles[currentIndex]}
                    onMatchClick={matchClick}
                />
            </div>
            <TaskBar page="HOME" />
        </div>
    );
};

export default Home;

