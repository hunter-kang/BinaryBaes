import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import "../styles/Text.css";
import TaskBar from '../components/TaskBar';
import Profile_Card from '../components/Profile_Card';

function Home() {
    // backend logic to load in profiles here suggest doing random
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () =>{
        try{
            const token = localStorage.getItem('token')
            const url = "http://localhost:5555/user/home";
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const otherUsers = await response.json()
            console.log('Response:', otherUsers)
            
            if (otherUsers.success) {
                setUsers(otherUsers)
                setLoading(false);
            } else {
                alert(otherUsers.message || 'Submission failed.');
            }


        }
        catch (err){
            console.error("An error occurred:", err);
            alert("An error occurred. Please try again later.");
            setLoading(false);
        }

    }
    //used to fetch data. We only want it to fetch the data when the page first renders
    useEffect(() => {
        fetchUsers();
    }, []); //need [] to make sure it only runs once
    console.log(users)
    //To hunter: you can now use users , which contains all the users and just load them on the page. :)



    const [profiles, setProfiles] = useState([ 
        { firstName: "WoodStock", age: "Unknown", height: "0.25ft", school: "Unschool", employmentStatus: "Unemployed" },
        { Name: "Clifford", Age: "50", Height: "25ft", School: "idk", Employment: "Unemployed"}
    ]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const matchClick = (buttonName) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % users.data.length);
        }, 500);  // 500ms (same as your animation duration)

        if (buttonName === "1") console.log("match");
        
        //backend save to database of all the matches here
        else if (buttonName === "0") console.log("not match");
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="home-container">
            <div className={`profile-card-container ${isAnimating ? 'animate-exit' : ''}`}>
                <Profile_Card
                    profile={users.data[currentIndex]}
                    onMatchClick={matchClick}
                />
            </div>
            <TaskBar page="HOME" />
        </div>
    );
};

export default Home;

