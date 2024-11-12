import React, { useState } from 'react';
import "../styles/Profile_Setup.css";
import "../styles/Text.css";

function Profile_Setup() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [school, setSchool] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [orientation, setOrientation] = useState('');
    const [relationshipType, setRelationshipType] = useState('');
    const [lookingFor, setLookingFor] = useState('');
    const [height, setHeight] = useState('');

    return (
        <div className="profile_setup-container">
            <p className="header">Profile Setup</p>
            <p className="sub-header" style={{margin: "0px"}}>General Information*</p>
            <form>
                {/* Name Input */}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />

                {/* Profile Picture Input */}
                <label
                    htmlFor="ProfilePicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    Profile Picture
                </label>
                <input
                    id="ProfilePicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Location Input */}
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />

                {/* School Input */}
                <input
                    type="text"
                    placeholder="School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="input-field"
                />

                {/* LinkedIn Input */}
                <input
                    type="text"
                    placeholder="LinkedIn"
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
                    <option value="">Pronouns</option>
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
                    <option value="">Age</option>
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
                    <option value="">Gender</option>
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
                    <option value="">Orientation</option>
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
                    <option value="">Relationship Type</option>
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
                    <option value="">Looking For</option>
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
                    <option value="">Height</option>
                    {[...Array(36).keys()].map(i => (
                        <option key={i} value={`${4 + Math.floor(i / 12)}'${i % 12}"`}>
                            {4 + Math.floor(i / 12)}' {i % 12}"
                        </option>
                    ))}
                </select>
            </form>
            <p className="sub-header" style={{margin: "0px"}}>More About Yourself</p>
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
                    Cafe Picture
                </label>
                <input
                    id="CafePicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
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
                    Job Picture
                </label>
                <input
                    id="JobPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}

                {/* Question #3 Input */}
                <input
                    type="text"
                    placeholder="What is your favorite color (in Hexadecimal!)?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <label
                    htmlFor="ColorPicture"
                    className="input-field"
                    style={{textAlign: 'left', margin: "0px", fontSize: "12px"}}>
                    Color Picture
                </label>
                <input
                    id="ColorPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
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
                    Emoji Picture
                </label>
                <input
                    id="CafePicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
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
                    Happy Picture
                </label>
                <input
                    id="HappyPicture"
                    style={{visibility:"hidden"}}
                    type={"file"}
                    //value = {ProfilePicture}
                    //onChange={(e) => setPicture(e.target.value)}
                />
                {/* here, we should add a preview of the image if it was successfully uploaded */}
            </form>
            <button type="submit">Save</button>
        </div>
    );
}

export default Profile_Setup;
