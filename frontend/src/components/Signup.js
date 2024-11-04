import { useState } from 'react';
import axios from 'axios';
import "../styles/Text.css";
import "../styles/Signup.css";
import logo from '../assets/logo-design.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';




function Signup() {
  const [firstname, setfirstname] = useState(''); // For first name
  const [lastname, setlastname] = useState(''); // For first name
  const [email, setEmail] = useState(''); // For email
  const [password1, setPassword1] = useState(''); // For password 1
  const [password2, setPassword2] = useState(''); // For password two MUST MATCH PASSWORD 1
  const [error, setError] = useState(''); // Store any error messages
  const [success, setSuccess] = useState(false); // boolean to indicate success or failure

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstname") setfirstname(value);
    else if (name === "lastname") setlastname(value);
    else if (name === "email") setEmail(value);
    else if (name === "password1") setPassword1(value);
    else if (name === "password2") setPassword2(value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
  
    if (!firstname || !lastname || !email) {
      setError("Required fields are missing");
      alert("Required fields are missing");
      return;
    }
  
    // Check if passwords match
    if (password1 !== password2) {
      setError("Passwords do not match");
      alert("Passwords do not match");
      return;
    }
  
    try {
      const url = "http://localhost:5555/auth/signup";
      const signupData = {
        firstname,
        lastname,
        email,
        password: password1, // Use password1 since password2 is only for confirmation
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });
  
      if (response.status === 409) {
        // User already exists
        alert("User with this email already exists");
        return;
      } else if (!response.ok) {
        // Handle other errors
        alert("An error occurred. Please try again.");
        return;
      }
  
      const result = await response.json();
      console.log(result);
      alert("User registered successfully!");
      navigate("/login"); // Redirect after successful signup (optional)
    } catch (err) {
      console.error("An error occurred:", err);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="signup-container">
      <div className="logo-container">
        <p className="header">Binary Baes:</p>
        <img src={logo} className="logo-signup" alt="yo mama" />
      </div>
      <div className="text-container">
        <p className="small-text">firstname:</p>
        <input className="input-signup"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={handleChange}
        />
        <p className="small-text">lastname:</p>
        <input className="input-signup"
                    name="lastname"
                    type="text"
                    value={lastname}
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
