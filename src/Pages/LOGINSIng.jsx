import React, { useState } from 'react'
import Signup from '../Components/Signup'
import Login from '../Components/Login'

function LOGINSIng() {
    const [toggle,setToggle] = useState(true)
  return (
    <div>
        {toggle ? <Signup/> : <Login/>}
      <h1 onClick={()=>setToggle(!toggle)}>Toggle</h1>
    </div>
  )
}

export default LOGINSIng