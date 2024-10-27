import { useState } from 'react';
import axios from 'axios';
import "../styles/Text.css";
import "../styles/Signup.css";
import logo from '../assets/logo-design.png';



function Signup() {
  const [username, setUsername] = useState(''); // For username
  const [email, setEmail] = useState(''); // For email
  const [password1, setPassword1] = useState(''); // For password 1
  const [password2, setPassword2] = useState(''); // For password two MUST MATCH PASSWORD 1
  const [error, setError] = useState(''); // Store any error messages
  const [success, setSuccess] = useState(false); // boolean to indicate success or failure

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password1") setPassword1(value);
    else if (name === "password2") setPassword2(value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password1 !== password2) {
      setError("Passwords do not match");
      return;
    }

    // Backend linking here? 
    
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
        <p className="header">Binary Baes:</p>
        <img src={logo} className="logo-signup" alt="yo mama" />
      </div>
      <div className="text-container">
        <p className="small-text">Username:</p>
        <input className="input-signup"
                    name="username"
                    type="text"
                    value={username}
                    onChange={handleChange}
        />
        <p className="small-text" style={{marginTop: 30}}>Email:</p>
        <input className="input-signup"
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleChange}
        />
        <p className="small-text" style={{marginTop: 30}}>Password:</p>
        <input className="input-signup"
                    name="password1"
                    type="text"
                    value={password1}
                    onChange={handleChange}
        />
        <p className="small-text" style={{marginTop: 30}}>Re-enter password:</p>
        <input className="input-signup"
                    name="password2"
                    type="text"
                    value={password2}
                    onChange={handleChange}
        />
        <button className = "button-design" onClick={handleSignup} style={{marginTop: 60}}>
          Signup
        </button> 
      </div>
    </div>
  );
}

export default Signup;
