import React, { useState } from 'react';
import "../styles/Profile_Setup.css";
import "../styles/Text.css";

function Profile_Setup() {
    //message to Amaia: when you get the name from backend make sure you concatenate
    //or seperate the first name and last name however you chose to connect

    //message to Simon: commented out useStates are the ones that Amaia needs added so we can display this data
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [school, setSchool] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [pronouns, setPronouns] = useState(''); //put this as drop down (she/her, he/him etc)
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(''); //drop down would be great too
    const [orientation, setOrientation] = useState('');
    const [relationshipType, setRelationshipType] = useState(''); //dont need this remove
    const [lookingFor, setLookingFor] = useState(''); //paragraph response 
    const [height, setHeight] = useState('');
    const [personality, setPersonality] = useState('');

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
    const [CafePic, setCafePic] = useState('');
    const [JobPic, setJobPic] = useState('');
    const [ColorPic, setColorPic] = useState('');
    const [EmojiPic, setEmojiPic] = useState('');
    const [HappyPic, setHappyPic] = useState('');

    return (
        <div className="profile_setup-container">
            <p className="header" style = {{marginRight: 450}}>class Profile:</p>
            <p className="sub-header" style={{margin: "0px"}}>Profile.general_information</p>
            <form>
                {/* Name Input */}
                <input
                    type="text"
                    placeholder="self.name"
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
                    value = {profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Location Input */}
                <input
                    type="text"
                    placeholder="self.location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />

                {/* School Input */}
                <input
                    type="text"
                    placeholder="self.school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="input-field"
                />

                {/* LinkedIn Input */}
                <input
                    type="text"
                    placeholder="self.linkedin"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    className="input-field"
                />

                {/* Pronouns Dropdown */}
                <select
                    value={pronouns}
                    onChange={(e) => setPronouns(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.pronouns</option>
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
                    <option value="">self.age</option>
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
                    <option value="">self.gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Other">Other</option>
                </select>

                {/* Orientation Dropdown */}
                <select
                    value={orientation}
                    onChange={(e) => setOrientation(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.orientation</option>
                    <option value="Straight">Straight</option>
                    <option value="Gay">Gay</option>
                    <option value="Bisexual">Bisexual</option>
                    <option value="Other">Other</option>
                </select>

                {/* Relationship Type Dropdown */}
                <select
                    value={relationshipType}
                    onChange={(e) => setRelationshipType(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.relationship_type</option>
                    <option value="Monogamous">Monogamous</option>
                    <option value="Polyamorous">Polyamorous</option>
                    <option value="Open">Open</option>
                </select>

                {/* Looking For Dropdown */}
                <select
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.looking_for</option>
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
                    <option value="">self.height</option>
                    {[...Array(36).keys()].map(i => (
                        <option key={i} value={`${4 + Math.floor(i / 12)}'${i % 12}"`}>
                            {4 + Math.floor(i / 12)}' {i % 12}"
                        </option>
                    ))}
                </select>

                {/* Personality Dropdown */}
                <select
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.mbti</option>
                    <option value="INTJ">INTJ</option>
                    <option value="INTP">INTP</option>
                    <option value="INFJ">INFJ</option>
                    <option value="INFP">INFP</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ISFP">ISFP</option>
                    <option value="ENTJ">ENTJ</option>
                    <option value="ENTP">ENTP</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ESFP">ESFP</option>
                </select>
            </form>

            <p className="sub-header" style={{margin: "0px"}}>Profile.more_about_yourself</p>
            <form>
                {/* Question #1 Input */}
                <input
                    type="text"
                    placeholder="What is your favorite thing to order when doing work at a cafe?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="CafePicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    pictures.cafe
                </label>
                <input
                    id="CafePicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    value = {CafePic}
                    onChange={(e) => setCafePic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Question #2 Input */}
                <input
                    type="text"
                    placeholder="If you could work any job irrespective of salary or requirements what would you choose?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="JobPicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    pictures.job
                </label>
                <input
                    id="JobPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    value = {JobPic}
                    onChange={(e) => setJobPic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Question #3 Input */}
                <input
                    type="text"
                    placeholder="Show off your favorite color!"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="ColorPicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    pictures.color
                </label>
                <input
                    id="ColorPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    value = {ColorPic}
                    onChange={(e) => setColorPic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Question #4 Input */}
                <input
                    type="text"
                    placeholder="What emoji do you personify?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="EmojiPicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    pictures.emoji
                </label>
                <input
                    id="EmojiPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    value = {EmojiPic}
                    onChange={(e) => setEmojiPic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Question #5 Input */}
                <input
                    type="text"
                    placeholder="Where is your happy place?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="HappyPicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    pictures.happy
                </label>
                <input
                    id="HappyPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    value = {HappyPic}
                    onChange={(e) => setHappyPic(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}
            </form>
            <p className="sub-header" style={{margin: "0px"}}>Profile.questionnaire_answers</p>
            <form>
                {/* Color Input */}
                <input
                    type="text"
                    placeholder="self.favorite_color"
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
                    <option value="">self.salary</option>
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
                    <option value="">self.going_out_frequency</option>
                    <option value="Rarely">Rarely</option>
                    <option value="Sometimes">Sometimes</option>
                    <option value="Often">Often</option>
                    <option value="Very Often">Very Often</option>
                </select>

                {/* Ethnicity Input */}
                <input
                    type="text"
                    placeholder="self.ethnicity"
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
                    <option value="">self.education</option>
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
                    <option value="">self.frugality</option>
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
                    <option value="">self.shower_frequency</option>
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
                    <option value="">self.coding_language</option>
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
                    <option value="">self.employment_status</option>
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
                                placeholder="self.company"
                                className="input-field"
                            />
                        </label>
                    </div>
                )}
            </form>
            <button type="submit">Save</button>
        </div>
    );
}

export default Profile_Setup;
