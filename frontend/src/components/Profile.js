import { useState } from 'react';
import "../styles/Text.css";
import "../styles/Profile.css";
import TaskBar from '../components/TaskBar';
import logo from '../assets/logo-design.png';
import snoopy from '../assets/snoopy_sample_img.png'
import snoopy2 from '../assets/snoopy.jpeg'


export default function Profile(){


   const [name, setName] = useState('');
   const [location, setLocation] = useState('');
   const [school, setSchool] = useState('');
   const [linkedIn, setLinkedIn] = useState('');
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
  

    return(
        <div className="profile-container">
            <p className="profile-text"> #Profile Information</p>
            <p className="question-text">#https://linkedin.com/{linkedIn}</p>
            <p className="prompt-text">#General info</p>
            <div className="row">
                <div className="info-container">
                    <p className="question-text">{name} = Profile():</p>
                    <p className="info-text"> • {name}.age = {age}</p>
                    <p className="info-text"> • {name}.gender = {gender}</p>
                    <p className="info-text"> • {name}.pronouns = {pronouns}</p>
                    <p className="info-text"> • {name}.lookingFor = {lookingFor}</p>
                    <p className="info-text"> • {name}.height = {height}</p>
                    <p className="info-text"> • {name}.location = {location}</p>
                    <p className="info-text"> • {name}.ethnicity = {ethnicity}</p>
                    <p className="info-text"> • {name}.major = {major}</p>
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
                    <p className="info-text"> • {name}.favorite_color = {color}</p>
                    <p className="info-text"> • {name}.school = {school}</p>
                    <p className="info-text"> • {name}.company = {company}</p>
                    <p className="info-text"> • {name}.salary = {salary}</p>
                    <p className="info-text"> • {name}.education = {education}</p>
                    <p className="info-text"> • {name}.employmentStatus = {employmentStatus}</p>
                </div>
                <div className="info-container">
                    <p className="info-text"> • {name}.frugality = {frugal}</p>
                    <p className="info-text"> • {name}.showerFrequency = {showerFrequency}</p>
                    <p className="info-text"> • {name}.goingOutFrequency = {goingOutFrequency}</p>
                    <p className="info-text"> • {name}.codingLanguage = {codingLanguage}</p>
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

