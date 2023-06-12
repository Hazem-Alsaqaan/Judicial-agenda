import React, { Fragment, memo, } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import pic from "../../pictures/noteFromMob2-removebg-preview.png"
import  "./MainPage.css"
// import googleAuth from "../../config/firebaseConfig"
// import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth"
import GoogleButton from "react-google-button"
// import { useNavigate } from "react-router-dom";

const MainPage = ()=>{
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(googleAuth, (user)=>{
    //             if(user){
    //                 window.localStorage.setItem("user", JSON.stringify(user))
    //             }
    //         })
    //         return ()=> unSubscribe()
    // },[])

    //handle submit sign in with google
    const handleLoginWithGoogle = ()=>{
        console.log("wait coming soon")
        // const provider = new GoogleAuthProvider()
        // signInWithPopup(googleAuth, provider)
        // .then(()=>navigate("/home"))
        // .catch(()=>navigate("/"))
    }
    return(
        <Fragment>
            <section className="main-page">
                <div className="container main-page-content">
                    <div className="main-page-picture">
                        <div className="text">
                            <h1>Welcome to our <br/> Community</h1>
                            <p>Enjoy with us, everything is easier</p>
                        </div>
                        <img src={pic} alt=""/>
                    </div>
                    <div className="main-page-text">
                        <Register/>
                        <Login/>
                    </div>
                    <p className="footer-text">We provide high quality products just for you!</p>
                    <GoogleButton
                    onClick={handleLoginWithGoogle}
                    />
                </div>
            </section>
        </Fragment>
    )
}
export default memo(MainPage)