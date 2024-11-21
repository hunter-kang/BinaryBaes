import { useState } from 'react';
import "../styles/Text.css";
import "../styles/Profile.css";
import TaskBar from '../components/TaskBar';
import logo from '../assets/logo-design.png';


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
           <img className="profile-photo" src={logo} alt="hi"/>
           <p className="name">
               Carin Dang
           </p>
           <p className="pronouns">she/her</p>
           <img className="photo" src={logo} alt="hi"></img>
           <div className="info-container">
               <div className="top-row">
                   <p className="info-text">19</p>
                   <p className="info-text">Nonbinary</p>
                   <p className="info-text">Straight</p>
               </div>
               <p className="info-text">Temple City</p>
               <p className="info-text">Long-term</p>
               <p className="info-text">Monogamy</p>
               <p className="info-text">UCLA</p>
           </div>
           <img className="photo" src={logo} alt="hi"></img>
           <div className = "question-container">
               <p className="question-text">If you could be anyone for a day who would you be?</p>
               <p className="question-answer">Myself lol!</p>
           </div>
           <img className="photo" src={logo} alt="hi"></img>
           <div className = "question-container">
               <p className="question-text">If you could be anyone for a day who would you be?</p>
               <p className="question-answer">Myself lol!</p>
           </div>
           <TaskBar page = "PROFLIE"/>
       </div>
      
   );
}
