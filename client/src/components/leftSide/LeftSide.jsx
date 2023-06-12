import React, { Fragment } from "react";
import "./LeftSide.css"
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux";
import ProfileImage from "../profile_icone/ProfileIcone";

const LeftSide = ()=>{
    const {user} = useSelector((state)=> state.userSlice)
    const {isLoading} = useSelector((state)=>state.userSlice)
    return(
        <Fragment>
            <section className="left-side">
                <div className="left-user-info">
                    <ProfileImage/>
                </div>
                {isLoading ? 
                        <p>Loading...</p> :
                <h6 className="my-1 p-1">{user.userName ? user.userName : user.displayName ? user.displayName : "unknown" }</h6>}
                <div className="left-text">
                    <NavLink to='/home' end><p>Calendar</p></NavLink>
                </div>
            </section>
        </Fragment>
    )
}
export default LeftSide