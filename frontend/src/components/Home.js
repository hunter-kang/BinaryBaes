import React, { useState } from 'react';
import "../styles/Home.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';
import Profile_Card from '../components/Profile_Card';

function Home() {
return (
    <div className = "home-container">
        <Profile_Card/>
        <TaskBar page = "HOME"/>
    </div>
);
};

export default Home;

