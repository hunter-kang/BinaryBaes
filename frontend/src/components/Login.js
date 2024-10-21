import React, {useEffect, useState} from "react"
import axios from "axios"

import {useNavigate, Link} from "react-router-dom"

function Login() {
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:5555/login", {
                email,password
            })

        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <div className = "login">
            <h1>Login</h1>
            <form action = "POST">
                <input type = "email" onChange={(e) => {setEmail(e.target.value)}} placeholder="email">  </input>
                <input type = "password" onChange={(e) => {setEmail(e.target.value)}} placeholder="password">  </input>
                <input type = "submit" onClick={(submit)}/>
            </form>


            <br>
            <p></p>
            </br>

            <Link to="/signup">Login Page</Link>
        </div>
    )
}
export default Login