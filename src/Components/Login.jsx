import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin } from '../Redux/action'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const val = useSelector(store=>store)
    console.log(val)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.get(`http://localhost:5000/users?email=${email}`)
        .then((res)=>{
            console.log(res.data)
            dispatch(UserLogin(res.data[0]))
            if(res.data.lenght>0){
                if(res.data[0].email==email&&res.data[0].password==password){
                    alert("Login successfull")
                }else{
                    alert("login failed")
                }
            }else{
                alert("User not Registered")
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label >Email</label><br />
            <input type="email" placeholder='Email ID' onChange={(e)=>setEmail(e.target.value)} /><br />
            <label >Password</label><br />
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br />
            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}

export default Login