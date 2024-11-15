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
    //const [major, setMajor] = useState('');
    //fav color
    //salary
    //ethnicity
    //education (make this drop down menu of HS Diploma,Bachelor, Master, phD)
    //how frugal are you from a scale of 1 - 10
    //showerFrequency
    //codingLanguage
    //employmentStatus
    //company

    return (
        <div className="profile_setup-container">
            <p className="header" style = {{marginRight: 450}}>class Profile:</p>
            <form>
                {/* Name Input */}
                <input
                    type="text"
                    placeholder="self.Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />

                {/* Location Input */}
                <input
                    type="text"
                    placeholder="self.Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />

                {/* School Input */}
                <input
                    type="text"
                    placeholder="self.School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="input-field"
                />

                {/* LinkedIn Input */}
                <input
                    type="text"
                    placeholder="self.LinkedIn"
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
                    <option value="">self.Pronouns</option>
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="They/Them">They/Them</option>
                    <option value="Other">Other</option>
                </select>

                {/* Age Dropdown */}
                <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input-field dropdown"
                >
                    <option value="">self.Age</option>
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
                    <option value="">self.Gender</option>
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
                    <option value="">self.Orientation</option>
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
                    <option value="">self.Relationship Type</option>
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
                    <option value="">self.Looking For</option>
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
                    <option value="">self.Height</option>
                    {[...Array(36).keys()].map(i => (
                        <option key={i} value={`${4 + Math.floor(i / 12)}'${i % 12}"`}>
                            {4 + Math.floor(i / 12)}' {i % 12}"
                        </option>
                    ))}
                </select>

                <button className = "button-design" type="submit">Save</button>
            </form>
        </div>
    );
}

export default Profile_Setup;
