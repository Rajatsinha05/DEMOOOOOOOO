import { LOGIN, SIGNUP } from "./actionType"



export const UserLogin = (data)=>{
    return {type : LOGIN,payload : data}
}

export const UserSignup = ()=>{
    return {type : SIGNUP}
}