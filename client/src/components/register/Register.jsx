import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import "./register.css"
import axios from "axios"
const Register = () => {
    const [username, setUsername] = useState("")
    const [phone_no, setPhone] = useState("");
    const handelRegister = async(e) => {
        e.preventDefault();
   
    try {
      await axios.post("http://localhost:8000/auth/register", {username, phone_no });
    //   history.push("/login");
    } catch (error) {}
  };
    return (
        <>
        <Sidebar name= "Auth"/>
        <div className='register'>
          <div className='main'>
            <h1>Register</h1>
          <input type="text" placeholder='Name' onChange={(e)=>setUsername(e.target.value)} />
          <input type="text" placeholder='Mobile Number' onChange={(e)=>setPhone(e.target.value)}/>

          <button className='button' onClick={handelRegister}>Generate Token</button>
          </div>
          
    </div>
        </>
  )
}

export default Register