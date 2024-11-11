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

    return (
        <div className="background-container">
            <img src={gif_login} className="gif_login" alt="yo mama" />
            <div className="login-container">
                <p className="header" style = {{marginTop: 0}}>Binary Baes:</p>
                <img src={logo} className="logo" alt="logo design" />
                <p className="small-text" style={{marginRight: 200}}>Email:</p>
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
                    Submit
                </button> {/* Standard HTML button */}
            </div>
        </div>
    );
}



// import React, {useEffect, useState} from "react"
// import axios from "axios"

// import {useNavigate, Link} from "react-router-dom"

// function Login() {
//     const[email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     async function submit(e){
//         e.preventDefault()
//         try{
//             await axios.post("http://localhost:5555/login", {
//                 email,password
//             })

//         }
//         catch(e){
//             console.log(e)
//         }
//     }
//     return(
//         <div className = "login">
//             <h1>Login</h1>
//             <form action = "POST">
//                 <input type = "email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email">  </input>
//                 <input type = "password" onChange={(e) => {setEmail(e.target.value)}} placeholder="password">  </input>
//                 <input type = "submit" onClick={(submit)}/>
//             </form>


//             <br>
//             <p></p>
//             </br>

//             <Link to="/signup">Login Page</Link>
//         </div>
//     )
// }
export default Login;
