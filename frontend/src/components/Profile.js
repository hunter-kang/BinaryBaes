import { useState, useEffect } from 'react';
import "../styles/Text.css";
import "../styles/Profile.css";
import TaskBar from '../components/TaskBar';
import { useNavigate } from 'react-router-dom';


export default function Profile(){


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
                    <p className="question-text">{profile.firstname} = Profile():</p>
                    {profile.age ? <p className="info-text"> • {profile.firstname}.age = {profile.age}</p> : null}
                    {profile.gender ? <p className="info-text"> • {profile.firstname}.gender = {profile.gender}</p> : null}
                    {profile.pronouns ? <p className="info-text"> • {profile.firstname}.pronouns = {profile.pronouns}</p> : null}
                    {profile.lookingFor ? <p className="info-text"> • {profile.firstname}.lookingFor = {profile.lookingFor}</p> : null}
                    {profile.height ? <p className="info-text"> • {profile.firstname}.height = {profile.height}</p> : null}
                    {profile.location ? <p className="info-text"> • {profile.firstname}.location = {profile.location}</p> : null}
                    {profile.ethnicity ? <p className="info-text"> • {profile.firstname}.ethnicity = {profile.ethnicity}</p> : null}
                    {profile.major ? <p className="info-text"> • {profile.firstname}.major = {profile.major}</p> : null}
                </div>
                <div className="img-container">
                    {profilePic ? <img className="photo" src={profilePic} alt="profile picture failed to load"></img> : null}
                    {profilePic ? <p className="png-text">.png</p> : null}
                </div>
            </div>
            <p className="prompt-text">#All about me!</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">def __str__(self):</p>
                    {profile.color ? <p className="info-text"> • {profile.firstname}.favorite_color = {profile.color}</p> : null}
                    {profile.school ? <p className="info-text"> • {profile.firstname}.school = {profile.school}</p> : null}
                    {profile.company ? <p className="info-text"> • {profile.firstname}.company = {profile.company}</p> : null}
                    {profile.salary ? <p className="info-text"> • {profile.firstname}.salary = {profile.salary}</p> : null}
                    {profile.education ? <p className="info-text"> • {profile.firstname}.education = {profile.education}</p> : null}
                    {profile.employmentStatus ? <p className="info-text"> • {profile.firstname}.employmentStatus = {profile.employmentStatus}</p> : null}
                </div>
                <div className="info-container">
                    {profile.frugal ? <p className="info-text"> • {profile.firstname}.frugality = {profile.frugal}</p> : null}
                    {profile.showerFrequency ? <p className="info-text"> • {profile.firstname}.showerFrequency = {profile.showerFrequency}</p> : null}
                    {profile.goingOutFrequency ? <p className="info-text"> • {profile.firstname}.goingOutFrequency = {profile.goingOutFrequency}</p> : null}
                    {profile.codingLanguage ? <p className="info-text"> • {profile.firstname}.codingLanguage = {profile.codingLanguage}</p> : null}
                </div>
            </div>
            {/*<TaskBar page = "PROFLIE"/>*/}
        </div>
    );
}

