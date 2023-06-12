import axios from "axios";
import React, { Fragment, memo } from "react";
import { useState } from "react";
import { loginSucced } from "../../redux/reducer/userSlice";
import { useDispatch } from "react-redux";
// import { loginUser } from "../../redux/action/userAction";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [checkLogin, setCeckLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://different-pear-tunic.cyclic.app/api/v1/users/login`, {
                email,
                password,
            });
            window.localStorage.setItem("user", JSON.stringify(res.data))
            dispatch(loginSucced(res.data));
            navigate("/home");
            setCeckLogin(false);
        } catch (err) {
            console.log(`sorry hazem failed login user ${err}`);
            setCeckLogin(true);
        }
        setEmail("")
        setPassword("")
    };
    return (
        <Fragment>
            <section className="login">
                <h6>Log in</h6>
                <form onSubmit={(e) => handleLogin(e)}>
                    <input
                        className="user-form"
                        type="email"
                        placeholder="Enter your email"
                        minLength="6"
                        maxLength="32"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className="user-form"
                        type="password"
                        placeholder="Password"
                        minLength="6"
                        maxLength="32"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className="btn-form" type="submit">
                        Log in
                    </button>
                </form>
                    <div style={!checkLogin ? {opacity: "0%"}: {opacity: "100%", transitionDuration: ".5s"}} className="bg-body-secondary p-2 d-flex justify-content-center align-items-center border border-primary rounded position-absolute top-100 ">
                        <p className="m-0">check email or password</p>
                    </div>
            </section>
        </Fragment>
    );
};
export default memo(Login);
