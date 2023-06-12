import React, { Fragment } from "react";
import Logo from "../../pictures/logo.jpg"
import "./BackgroundLogo.css"

const BackgroundLogo = ()=>{
    return(
        <Fragment>
            <section className="box-logo">
                <div className="box-project">
                    <div className="box-img">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="text">
                        <h4>kings court law</h4>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default BackgroundLogo