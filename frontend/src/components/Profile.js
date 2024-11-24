import { useState, useEffect } from 'react';
import "../styles/Text.css";
import "../styles/Profile.css";
import TaskBar from '../components/TaskBar';
import logo from '../assets/logo-design.png';
import snoopy from '../assets/snoopy_sample_img.png'
import snoopy2 from '../assets/snoopy.jpeg'
import { useNavigate } from 'react-router-dom';


export default function Profile(){


   const [name, setName] = useState('');
   const [location, setLocation] = useState('');
   const [school, setSchool] = useState('');
   const [linkedin, setLinkedIn] = useState('');
   const [pronouns, setPronouns] = useState('');
   const [age, setAge] = useState('');
   const [gender, setGender] = useState('');
   const [lookingFor, setLookingFor] = useState('');
   const [height, setHeight] = useState('');


   const [major, setMajor] = useState('');
   const [color, setColor] = useState('');
   const [salary, setSalary] = useState('');
   const [ethnicity, setEthnicity] = useState('');
   const [education, setEducation] = useState('');
   const [frugal, setFrugal] = useState('');
   const [showerFrequency, setShowerFrequency] = useState('');
   const [goingOutFrequency, setGoingOutFrequency] = useState('');
   const [codingLanguage, setCodingLanguage] = useState('');
   const [employmentStatus, setEmploymentStatus] = useState('');
   const [company, setCompany] = useState('');


   const [profilePic, setProfilePic] = useState('');
   const [profile, setProfile] = useState({});
   const navigate = useNavigate();
  
   useEffect(() => {
    const fetchProfile = async () => {
        const token = localStorage.getItem('token'); // Replace with how you store the token
       
        if (!token) {
            console.error("No auth token found");
            return;
        }


        try {
            const response = await fetch('http://localhost:5555/user/profile', {
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
            setProfile(data.profile || {});
            setLinkedIn(data.profile.linkedin || '');
            setSchool(data.profile.school || '');
            setLocation(data.profile.location || '');
            setPronouns(data.profile.pronouns || '');
            setAge(data.profile.age || '');
            setGender(data.profile.gender || '');
            setLookingFor(data.profile.lookingFor || '');
            setHeight(data.profile.height || '');
            setMajor(data.profile.major || '');
            setColor(data.profile.color || '');
            setSalary(data.profile.salary || '');
            setEthnicity(data.profile.ethnicity || '');
            setEducation (data.profile.education || '');
            setFrugal(data.profile.frugal || '');
            setShowerFrequency(data.profile.showerFrequency || '');
            setGoingOutFrequency(data.profile.goingOutFrequency || '');
            setCodingLanguage(data.profile.codingLanguage || '');
            setEmploymentStatus(data.profile.employmentStatus || '');
            setCompany(data.profile.company || '');


        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };


    fetchProfile();
}, []);


    return(
        <div className="profile-container">
            <p className="profile-text">{profile.firstname + " " + profile.lastname + "'s"} Information</p>
            <p className="question-text">Linkedin: {profile.linkedin}</p>
            <p className="prompt-text">#General info</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">{name} = Profile():</p>
                    <p className="info-text"> • {name}.age = {profile.age}</p>
                    <p className="info-text"> • {name}.gender = {profile.gender}</p>
                    <p className="info-text"> • {name}.pronouns = {profile.pronouns}</p>
                    <p className="info-text"> • {name}.lookingFor = {profile.lookingFor}</p>
                    <p className="info-text"> • {name}.height = {profile.height}</p>
                    <p className="info-text"> • {name}.location = {profile.location}</p>
                    <p className="info-text"> • {name}.ethnicity = {profile.ethnicity}</p>
                    <p className="info-text"> • {name}.major = {profile.major}</p>
                </div>
                <div className="img-container">
                    <img className="photo" src={profilePic} alt="profile picture failed to load"></img>
                    <p className="png-text">.png</p>
                </div>
            </div>
            <p className="prompt-text">#All about me!</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def __str__(self):</p>
                    <p className="info-text"> • {name}.favorite_color = {profile.color}</p>
                    <p className="info-text"> • {name}.school = {profile.school}</p>
                    <p className="info-text"> • {name}.company = {profile.company}</p>
                    <p className="info-text"> • {name}.salary = {profile.salary}</p>
                    <p className="info-text"> • {name}.education = {profile.education}</p>
                    <p className="info-text"> • {name}.employmentStatus = {profile.employmentStatus}</p>
                </div>
                <div className="info-container">
                    <p className="info-text"> • {name}.frugality = {profile.frugal}</p>
                    <p className="info-text"> • {name}.showerFrequency = {profile.showerFrequency}</p>
                    <p className="info-text"> • {name}.goingOutFrequency = {profile.goingOutFrequency}</p>
                    <p className="info-text"> • {name}.codingLanguage = {profile.codingLanguage}</p>
                </div>
            </div>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">{name} = Profile():</p>
                    <p className="info-text"> • Orientation: Binary Orientation: Binary Orientation: Binary Orientation: Binary </p>
                    <p className="info-text"> • Gender: Non-binary Gender: Non-binary Gender: Non-binary Gender: Non-binary </p>
                </div>
                <div className="answer-container">
                </div>
            </div>
            <p className="prompt-text">#Prompt 1</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def your_favorite_color():</p>
                    <p className="info-text">mint green mint green mint green mint green mint green mint green mint green</p>
                    <p className="info-text">sky blue sky blue sky blue sky blue sky blue sky blue sky blue sky blue </p>
                </div>
                <div className="img-container">
                    <img className="photo" src={snoopy} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
            </div>
            <p className="prompt-text">#Prompt 2</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def your_favorite_color():</p>
                </div>
                <div className="info-container">
                    <img className="photo" src={snoopy2} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
            </div>
            <p className="prompt-text">#Prompt 3</p>
            <div className="question-container">
                <p className="question-text">def your_favorite_color(): def your_favorite_color(): def your_favorite_color():</p>
                <div className="row">
                    <div className="answer-container">
                        <p className="info-text">mint green mint green mint green mint green mint green mint green mint green</p>
                        <p className="info-text">sky blue sky blue sky blue sky blue sky blue sky blue sky blue sky blue </p>
                    </div>
                    <div className="answer-container">
                        <img className="photo" src={snoopy2} alt="hi"></img>
                        <p className="png-text">.png</p>
                    </div>
                </div>
            </div>
            <p className="prompt-text">#Prompt 4</p>
            <div className="row">
                <div className="answer-container">
                    <img className="photo" src={snoopy2} alt="hi"></img>
                    <p className="png-text">.png</p>
                </div>
                <div className="answer-container">
                </div>
            </div>
            {/*<TaskBar page = "PROFLIE"/>*/}
        </div>
    );
}

