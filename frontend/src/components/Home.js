import React, { useState } from 'react';
import "../styles/Home.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';

function Home() {
return (
    <div className = "background-container">
        <TaskBar page = "HOME"/>
    </div>
);
};

export default Home;

