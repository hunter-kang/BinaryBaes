import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Login.css";
import "../styles/Text.css";
import gif_login from '../assets/login-design.gif';
import logo from '../assets/logo-design.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // For username
    const [password, setPassword] = useState(''); // For password
    const [error, setError] = useState(''); // Store any error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);

      };

    //backend connection 
    const handleLogin = async (event) => {
        event.preventDefault();
      
        if (!email || !password) {
          setError("Required fields are missing");
          alert("Required fields are missing");
          return;
        }
      
      
        try {
          const url = "http://localhost:5555/auth/login";
          const loginData = {
            email,
            password
          }
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          });
          const result = await response.json();
          const {success, message, jwtToken, name, error} = result;
          if (success){
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            setTimeout(() => {
                navigate('/profile')
            }, 1000)
          }
        } catch (err) {
          console.error("An error occurred:", err);
          alert("An error occurred. Please try again.");
        }
      };

      const handleSignup = async (event) => {
        navigate('/Signup'); 
      };

    return (
        <div className="background-container">
            <img src={gif_login} className="gif_login" alt="yo mama" />
            <div className="login-container">
                <p className="header" style = {{marginTop: 0}}>Binary Baes:</p>
                <img src={logo} className="logo" alt="logo design"/>
                <p className="small-text" style={{marginRight: 240}}>Email:</p>
                <input 
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleChange}
                />
                <p className="small-text" style={{marginTop: 30, marginRight: 200}} >Password:</p>
                <input 
                    name="password"
                    type="password" // Change to "password" for security
                    value={password}
                    onChange={handleChange}
                />
                <button className = "button-design" onClick={handleLogin} style={{marginTop: 60}}>
                    Login
                </button>
                <p className="small-text" style = {{marginTop: 40}}>don't have an account <button className = "button-text-design" onClick={handleSignup}>
                    signup
                </button></p>
            </div>
        </div>
    );
}
export default Login;
