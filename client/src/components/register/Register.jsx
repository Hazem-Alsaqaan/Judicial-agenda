import axios from "axios";
import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../../redux/reducer/userSlice";
import AuthSuccess from "../authSuccess/AuthSuccess";
import "./Register.css"

const Register = ()=>{
    const [registerToggle, setRegisterToggle] = useState(false)
    const [visibility, setVisibility] = useState(false)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = async(e)=>{
        e.preventDefault()
        try{
            const res = await axios.post(`https://different-pear-tunic.cyclic.app/api/v1/users/register`, {userName, email, password})
            setRegisterToggle(true)
            dispatch(registerSuccess(res.data)) 
        }catch(err){
            setRegisterToggle(false)
            console.log(`failed register user ${err}`)
        }
        setVisibility(true)
        setUserName("")
        setEmail("")
        setPassword("")
    }
    return (
        <Fragment>
            <section className="register">
                <h6>Register</h6>
                <form onSubmit={(e)=>handleRegister(e)}>
                    <input 
                    className="user-form"
                    type="text"
                    placeholder="User name"
                    name="name"
                    minLength= "3"
                    maxLength="32"
                    required
                    onChange={(e)=>setUserName(e.target.value)}
                    value={userName}
                    />
                    <input 
                    className="user-form"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    minLength= "6"
                    maxLength="32"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                    <input 
                    className="user-form"
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength= "6"
                    maxLength="32"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />
                    <button
                    className="btn-form"
                    type="submit"
                    >Register</button>
                </form>
            </section>
            <AuthSuccess registerToggle={registerToggle} setRegisterToggle={setRegisterToggle} visibility = {visibility} setVisibility = {setVisibility}/>
        </Fragment>
    )
}
export default Register