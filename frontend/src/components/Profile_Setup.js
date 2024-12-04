import React, { useState, useEffect } from 'react';
import "../styles/Profile_Setup.css";
import { useNavigate } from 'react-router-dom';
import TaskBar from '../components/TaskBar';
import "../styles/Text.css";
import axios from 'axios';


function Profile_Setup() {
   //message to Amaia: when you get the name from backend make sure you concatenate
   //or seperate the first name and last name however you chose to connect


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


   const [profilePicture, setProfilePicture] = useState(null);
   const [previewUrl, setPreviewUrl] = useState(null);
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
               setProfilePicture(data.profilePicture || '');


           } catch (error) {
               console.error('Error fetching profile:', error);
           }
       };


       fetchProfile();
   }, []);

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const url = "http://localhost:5555/user/profilepost";
            const profileData = {
                profilePicture: profilePicture || profile.profilePicture,
                linkedin, 
                school, 
                location, 
                pronouns, 
                gender, 
                major,  
                salary, 
                height, 
                ethnicity, 
                education, 
                frugal, 
                age, 
                color, 
                lookingFor, 
                goingOutFrequency, 
                showerFrequency, 
                codingLanguage,
                employmentStatus, 
                company
            }

            console.log("Profile Pic Data:", profilePicture);
            console.log("Profile Data Upon Submission:", profileData);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(profileData),
          });

            const result = await response.json();
            console.log('Response:', result);
        
            if (result.success) {
                alert('Profile submitted successfully!');
                navigate('/profile');               
            } else {
                alert(result.message || 'Submission failed.');
                navigate('/profile');
            }
        } catch (err) {
          console.error("An error occurred:", err);
          alert("An error occurred. Please try again.");
        }
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();
            
            // Set up the FileReader to encode the file as base64
            reader.onloadend = () => {
                const base64String = reader.result
                setProfilePicture(base64String);  // Store the base64-encoded image
                setPreviewUrl(reader.result); // Set the preview URL
            };
            reader.readAsDataURL(file);  // Read the file as base64
        }
    };

   return (
       <div className="profile_setup-container">
           <p className="header" style = {{marginRight: 450, marginTop: 150}}>class Profile:</p>
           <p className="sub-header" style={{margin: "0px", marginRight: 480}}>Profile.general_information</p>
           <form onSubmit={handleSubmit} style={{marginTop: 0}}>
               {/* Name Input */}
               <input
                   type="text"
                   placeholder={profile.firstname + ' ' + profile.lastname || 'Enter your name'}
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="input-field"
               />


               {/* Profile Picture Input */}
               <label
                   htmlFor="ProfilePicture"
                   className="input-field"
                   style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                   pictures.profile
               </label>
               <input
                   id="ProfilePicture"
                   style={{visibility:"hidden"}}
                   type={"file"}
                   onChange={handleFileChange}
               />

               {/* Preview of the uploaded image */}
               {previewUrl && (
                    <div>
                    <img
                        src={previewUrl}
                        alt="Profile Preview"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    </div>
                )}


               {/* Location Input */}
               <input
                   type="text"
                   placeholder={profile.location || 'Enter your location'}
                   value={location}
                   onChange={(e) => setLocation(e.target.value)}
                   className="input-field"
               />


               {/* School Input */}
               <input
                   type="text"
                   placeholder={profile.school || 'Enter your school'}
                   value={school}
                   onChange={(e) => setSchool(e.target.value)}
                   className="input-field"
               />


               {/* LinkedIn Input */}
               <input
                   type="text"
                   placeholder={profile.linkedin || 'Enter your linkedin'}
                   value={linkedin}
                   onChange={(e) => setLinkedIn(e.target.value)}
                   className="input-field"
               />


               {/* Pronouns Dropdown */}
               <select
                   value={pronouns}
                   onChange={(e) => setPronouns(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.pronouns || 'Enter your pronouns'}</option>
                   <option value="He/Him">He && Him</option>
                   <option value="She/Her">She && Her</option>
                   <option value="They/Them">They && Them</option>
                   <option value="Other">Other</option>
               </select>


               {/* Age Dropdown */}
               <select
                   value={age}
                   onChange={(e) => setAge(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.age || 'Enter your age'}</option>
                   {[...Array(100).keys()].map(i => (
                       <option key={i + 18} value={i + 18}>{i + 18}</option>
                   ))}
               </select>


               {/* Gender Dropdown */}
               <select
                   value={gender}
                   onChange={(e) => setGender(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.gender || 'Enter your gender'}</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Non-binary">Non-binary</option>
                   <option value="Other">Other</option>
               </select>


               {/* Looking For Dropdown */}
               <select
                   value={lookingFor}
                   onChange={(e) => setLookingFor(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.lookingFor || 'Enter your dating preference'}</option>
                   <option value="Friendship">Friendship</option>
                   <option value="Casual Dating">Casual Dating</option>
                   <option value="Long-term Relationship">Long-term Relationship</option>
               </select>


               {/* Height Dropdown */}
               <select
                   value={height}
                   onChange={(e) => setHeight(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.height || 'Enter your height'}</option>
                   {[...Array(36).keys()].map(i => (
                       <option key={i} value={`${4 + Math.floor(i / 12)}'${i % 12}"`}>
                           {4 + Math.floor(i / 12)}' {i % 12}"
                       </option>
                   ))}
               </select>

               {/* Major Input */}
               <input
                   type="text"
                   placeholder={profile.major || 'Enter your major'}
                   value={major}
                   onChange={(e) => setMajor(e.target.value)}
                   className="input-field"
               />


               {/* Color Input */}
               <input
                   type="text"
                   placeholder={profile.color || 'Enter your color'}
                   value={color}
                   onChange={(e) => setColor(e.target.value)}
                   className="input-field"
               />


               {/* Salary Input */}
               <select
                   value={salary}
                   onChange={(e) => setSalary(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.salary || 'Enter your salary'}</option>
                   <option value="Poor">less than 100k</option>
                   <option value="100k-120k">100k-120k</option>
                   <option value="120k-150k">120k-150k</option>
                   <option value="150K+">150K+</option>
               </select>


               {/* Going Out Frequency Input */}
               <select
                   value={goingOutFrequency}
                   onChange={(e) => setGoingOutFrequency(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.goingOutFrequency || 'Enter your going out frequency'}</option>
                   <option value="Rarely">Rarely</option>
                   <option value="Sometimes">Sometimes</option>
                   <option value="Often">Often</option>
                   <option value="Very Often">Very Often</option>
               </select>


               {/* Ethnicity Input */}
               <input
                   type="text"
                   placeholder={profile.ethnicity || 'Enter your ethnicity'}
                   value={ethnicity}
                   onChange={(e) => setEthnicity(e.target.value)}
                   className="input-field"
               />


               {/* Education Dropdown */}
               <select
                   value={education}
                   onChange={(e) => setEducation(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.education || 'Enter your education'}</option>
                   <option value="High School Diploma">High School Diploma</option>
                   <option value="Bachelor's Degree">Bachelor's Degree</option>
                   <option value="Master's Degree">Master's Degree</option>
                   <option value="PhD">PhD</option>
                   <option value="Other">Other</option>
               </select>


               {/* Frugality Dropdown */}
               <select
                   value={frugal}
                   onChange={(e) => setFrugal(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.frugal || 'Enter your frugality'}</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
               </select>


               {/* Shower Frequency Input */}
               <select
                   value={showerFrequency}
                   onChange={(e) => setShowerFrequency(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.showerFrequency || 'Enter your shower frequency'}</option>
                   <option value="Daily">Daily</option>
                   <option value="Every other day">Every other day</option>
                   <option value="A few times a week">A few times a week</option>
                   <option value="Rarely">Rarely</option>
               </select>


               {/* Coding Language Input */}
               <select
                   value={codingLanguage}
                   onChange={(e) => setCodingLanguage(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.codingLanguage || 'Enter your favorite coding language'}</option>
                   <option value="JavaScript">JavaScript</option>
                   <option value="Python">Python</option>
                   <option value="Java">Java</option>
                   <option value="C">C</option>
                   <option value="C++">C++</option>
                   <option value="C#">C#</option>
                   <option value="Ruby">Ruby</option>
                   <option value="Go">Go</option>
                   <option value="Swift">Swift</option>
                   <option value="Kotlin">Kotlin</option>
                   <option value="PHP">PHP</option>
                   <option value="Rust">Rust</option>
                   <option value="TypeScript">TypeScript</option>
                   <option value="R">R</option>
                   <option value="HTML/CSS">HTML/CSS</option>
                   <option value="SQL">SQL</option>
                   <option value="MATLAB">MATLAB</option>
               </select>


               {/* Employment Dropdown */}
               <select
                   value={employmentStatus}
                   onChange={(e) => setEmploymentStatus(e.target.value)}
                   className="input-field dropdown"
               >
                   <option value="">{profile.employmentStatus || 'Enter your employment status'}</option>
                   <option value="Employed">Employed</option>
                   <option value="Self-employed">Self-employed</option>
                   <option value="Unemployed">Unemployed</option>
                   <option value="Student">Student</option>
               </select>


               {/* Conditionally Render Company Input if Employment Status is selected */}
               {employmentStatus && employmentStatus !== "Unemployed" && (
                   <div className="question-box">
                       <label>
                           <input
                               type="text"
                               value={company}
                               onChange={(e) => setCompany(e.target.value)}
                               placeholder={profile.company || 'Enter your company'}
                               className="input-field"
                           />
                       </label>
                   </div>
               )}
               <button className = "button-design" type="submit">Save</button>
           </form>
           <TaskBar page = "SETTINGS"/>
       </div>
   );
}


export default Profile_Setup;
