import React, { useState } from 'react';
import "../styles/Questionnaire.css";
import "../styles/Text.css";

function MatchingQuestions() {
    const [goingOutFrequency, setGoingOutFrequency] = useState('');
    const [salary, setSalary] = useState('');
    const [showerFrequency, setShowerFrequency] = useState('');
    const [codingLanguage, setCodingLanguage] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const answers = {
            goingOutFrequency,
            salary,
            showerFrequency,
            codingLanguage,
            employmentStatus,
            company,
        };
        console.log('User Answers:', answers);
    };

    return (
        <div className="matching-questions-container">
            <p className="header"style = {{marginRight: 490}}>Questionnaire</p>
            <form onSubmit={handleSubmit}>
                {/* How much do you go out? */}
                <label>
                    <select value={goingOutFrequency} onChange={(e) => setGoingOutFrequency(e.target.value)} className="dropdown">
                        <option value="">How often do you go out?</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Often">Often</option>
                        <option value="Very Often">Very Often</option>
                    </select>
                </label>

                {/* Salary */}
                <label>
                    <select value={salary} onChange={(e) => setSalary(e.target.value)} className="dropdown">
                        <option value="">What is your salary range?</option>
                        <option value="Poor">Poor</option>
                        <option value="100k-120k">100k-120k</option>
                        <option value="120k-150k">120k-150k</option>
                        <option value="150K+">150K+</option>
                    </select>
                </label>

                {/* Shower Frequency */}
                <label>
                    <select value={showerFrequency} onChange={(e) => setShowerFrequency(e.target.value)} className="dropdown">
                        <option value="">How often do you shower?</option>
                        <option value="Daily">Daily</option>
                        <option value="Every other day">Every other day</option>
                        <option value="A few times a week">A few times a week</option>
                        <option value="Rarely">Rarely</option>
                    </select>
                </label>

                {/* Favorite Coding Language Dropdown */}
                <label>
                    <select value={codingLanguage} onChange={(e) => setCodingLanguage(e.target.value)} className="dropdown">
                        <option value="">Favorite Programming Langugage</option>
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
                </label>

                {/* Employment Status */}
                <label>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} className="dropdown">
                        <option value="">Select Employment Status</option>
                        <option value="Employed">Employed</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Student">Student</option>
                    </select>
                </label>

                {/* Conditionally Render Company Input if Employment Status is selected */}
                {employmentStatus && employmentStatus !== "Unemployed" && (
                    <div className="question-box">
                        <label>
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Enter company name"
                                className="input-field"
                            />
                        </label>
                    </div>
                )}

                <button className = "button-design" Buttype="submit">Submit Answers</button>
            </form>
        </div>
    );
}

export default MatchingQuestions;
