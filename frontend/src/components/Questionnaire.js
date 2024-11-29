import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Questionnaire.css";
import "../styles/Text.css";

function MatchingQuestions() {
    const [goingOutFrequency, setGoingOutFrequency] = useState('');
    const [salary, setSalary] = useState('');
    const [showerFrequency, setShowerFrequency] = useState('');
    const [codingLanguage, setCodingLanguage] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();

    //backend connection
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!goingOutFrequency || !salary || !showerFrequency || !codingLanguage || !employmentStatus) {
          alert("Required fields are missing");
          return;
        }
      
        try {
            const token = localStorage.getItem('token');
            const url = "http://localhost:5555/user/questionnaire";
            const questionnaireData = {
                goingOutFrequency, 
                salary,
                showerFrequency,
                codingLanguage,
                employmentStatus,
                company
            }
            const response = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(questionnaireData),
          });
            const result = await response.json();
            console.log('Response:', result);
        
            if (result.success) {
                alert('Questionnaire submitted successfully!');
                navigate('/profile_setup');
            } else {
                alert(result.message || 'Submission failed.');
            }
        } catch (err) {
          console.error("An error occurred:", err);
          alert("An error occurred. Please try again.");
        }
      };

    return (
        <div className="matching-questions-container">
            <p className="header"style = {{marginRight: 490}}>Questionnaire</p>
            <form onSubmit={handleSubmit}>
                {/* How much do you go out? */}
                <label>
                    <select value={goingOutFrequency} onChange={(e) => setGoingOutFrequency(e.target.value)} className="dropdown">
                        <option value="">self.going_out_frequency</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Often">Often</option>
                        <option value="Very Often">Very Often</option>
                    </select>
                </label>

                {/* Salary */}
                <label>
                    <select value={salary} onChange={(e) => setSalary(e.target.value)} className="dropdown">
                        <option value="">self.salary</option>
                        <option value="Poor">less than 100k</option>
                        <option value="100k-120k">100k-120k</option>
                        <option value="120k-150k">120k-150k</option>
                        <option value="150K+">150K+</option>
                    </select>
                </label>

                {/* Shower Frequency */}
                <label>
                    <select value={showerFrequency} onChange={(e) => setShowerFrequency(e.target.value)} className="dropdown">
                        <option value="">self.shower_frequency</option>
                        <option value="Daily">Daily</option>
                        <option value="Every other day">Every other day</option>
                        <option value="A few times a week">A few times a week</option>
                        <option value="Rarely">Rarely</option>
                    </select>
                </label>

                {/* Favorite Coding Language Dropdown */}
                <label>
                    <select value={codingLanguage} onChange={(e) => setCodingLanguage(e.target.value)} className="dropdown">
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
                </label>

                {/* Employment Status */}
                <label>
                    <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} className="dropdown">
                        <option value="">self.employment_status</option>
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
                                placeholder="self.company"
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
