import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
  
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
     
    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {
            name : name,
            email : email,
            password : password
        }
        axios.post(`http://localhost:5000/users`,obj)
        .then((res)=>{
            console.log(res.data)
            alert("User Registered Successfully")
        })
        .catch((err)=>{
            console.log(err)
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >Name</label><br />
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} /><br />
            <label >Email</label><br />
            <input type="email" placeholder='Email ID' onChange={(e)=>setEmail(e.target.value)} /><br />
            <label >Password</label><br />
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br />
            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}

export default Signup