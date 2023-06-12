import React, { Fragment, memo } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import "./AuthSuccess.css"

const AuthSuccess = ({registerToggle, setRegisterToggle, visibility,setVisibility})=>{
    return(
        <Fragment>
            <section style={visibility ? {opacity: "100%", top: "100px"}: {opacity: "0%", top: "-300px"}} className="success">
                <FontAwesomeIcon icon={!registerToggle?faCircleXmark:faCircleCheck}/>
                <h1>{!registerToggle? "Sorry" : "Congratulations"}</h1>
                <p>{!registerToggle? "This Email Is Already Exist" : "Successful Registration"}</p>
                <button onClick={()=>setVisibility(false)}>Ok</button>
            </section>
        </Fragment>
    )
}

export default memo(AuthSuccess)
