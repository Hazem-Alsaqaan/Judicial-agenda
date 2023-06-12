import React, { Fragment,memo} from "react";
import "./CenterSide.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons"
import {faCaretRight} from "@fortawesome/free-solid-svg-icons"
import {faCaretUp} from "@fortawesome/free-solid-svg-icons"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"

const CenterSide = ({months, currentMonth,setCurrentMonth,currentYear,setCurrentYear})=>{
    const handleAfterMonths = (e)=>{
        setCurrentMonth(currentMonth + 1)
        if(currentMonth === 11){
            setCurrentMonth(currentMonth)
            e.currentTarget.style.cssText = `cursor: no-drop; opacity: 50% `
        }
    }
    const handleBeforeMonths = (e)=>{
        setCurrentMonth(currentMonth - 1)
        if(currentMonth === 0){
            setCurrentMonth(currentMonth)
            e.currentTarget.style.cssText = `cursor: no-drop; opacity: 50% `
        }
    }
    return(
        <Fragment>
            <section className="center-side">
                <h4 className="text-center">Calendar</h4>
                <div className="years">
                    <FontAwesomeIcon icon={faCaretLeft} onClick={()=>setCurrentYear(currentYear - 1)}/>
                    <h6>{currentYear}</h6>
                    <FontAwesomeIcon icon={faCaretRight} onClick={()=>setCurrentYear(currentYear + 1)}/>
                </div>
                        <ul className="monthes">
                            <FontAwesomeIcon icon={faCaretUp} onClick={(e)=>handleAfterMonths(e)}/>
                            <li>{months[currentMonth-2]}</li>
                            <li className="near">{months[currentMonth-1]}</li>
                            <li className="active">{months[currentMonth]}</li>
                            <li className="near">{months[currentMonth + 1]}</li>
                            <li>{months[currentMonth + 2]}</li>
                            <FontAwesomeIcon icon={faCaretDown} onClick={(e)=>handleBeforeMonths(e)}/>
                        </ul>
            </section>
        </Fragment>
    )
}
export default memo(CenterSide)