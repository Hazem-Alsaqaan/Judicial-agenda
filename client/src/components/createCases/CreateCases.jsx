import React, { Fragment, memo } from "react";
import "./CreateCases.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons"
import {faCalculator} from "@fortawesome/free-solid-svg-icons"
import {faPerson} from "@fortawesome/free-solid-svg-icons"
import {faScaleBalanced} from "@fortawesome/free-solid-svg-icons"
import {faFilePen} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import ShowCreatedCase from "../showCreatedCase/ShowCreatedCase";
import {useDispatch, useSelector } from "react-redux"
import { addNewCase, getAllCases, updateCase } from "../../redux/action/casesAction";
import { useRef } from "react";
import BackgroundLogo from "../backgroundLogo/BackgroundLogo";
import { Link } from "react-router-dom";

const CreateCases = ()=>{
    const [render, setRender] = useState(false)
    const refValue = useRef()
    const {user} = useSelector((state)=>state.userSlice)
    const dispatch = useDispatch()
    const [caseContent, setCaseContent] = useState({
        caseNumber: "",
        clientName: "",
        opponent: "",
        caseType: "",
        fromSession: "",
        toSession: "",
        decision: "",
        user: JSON.parse(window.localStorage.getItem("user")),
    })

    // handle create new case
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addNewCase(caseContent))
        setCaseContent({...caseContent, caseNumber: ""})
        setCaseContent({...caseContent, clientName: ""})
        setCaseContent({...caseContent, opponent: ""})
        setCaseContent({...caseContent, caseType: ""})
        setCaseContent({...caseContent, fromSession: ""})
        setCaseContent({...caseContent, toSession: ""})
        setCaseContent({...caseContent, decision: ""})
    }
    // handle update case

    const handleUpdateCase = (e)=>{
        e.preventDefault()
        setRender(!render)
        dispatch(updateCase(caseContent))
        dispatch(getAllCases(user._id))
    }
     // handle up data to inputs
    const upDataToInput = (item)=>{
        //input
        refValue.current[0].value = item.caseNumber
        refValue.current[1].value = item.clientName
        refValue.current[2].value = item.opponent
        refValue.current[3].value = item.caseType
        refValue.current[4].value = item.fromSession
        refValue.current[5].value = item.toSession
        refValue.current[6].value = item.decision
        // state
        caseContent.caseNumber = refValue.current[0].value
        caseContent.clientName = refValue.current[1].value
        caseContent.opponent = refValue.current[2].value
        caseContent.caseType = refValue.current[3].value
        caseContent.fromSession = refValue.current[4].value
        caseContent.toSession = refValue.current[5].value
        caseContent.decision = refValue.current[6].value
        caseContent._id = item._id
        caseContent.user = JSON.parse(window.localStorage.getItem("user"))
    }
    
    return(
        <Fragment>
        <section className="create-page">
            <section className="creating">
                <Link to="/home" className="replay">
                    <FontAwesomeIcon icon={faReply}/>
                    <span>back</span>
                </Link>
                <section className="create-cases">
                        <div className="bg-icone">
                            <FontAwesomeIcon icon={faBookOpen}/>
                        </div>
                        <form onSubmit={(e)=>handleSubmit(e)} className="container create-form" ref={refValue}>
                            <div>
                                <FontAwesomeIcon icon={faCalculator}/>                           
                                <input
                                className="cases-form"
                                type="text"
                                id="case-number"
                                placeholder="رقم القضية"
                                onChange={(e)=>setCaseContent({...caseContent, caseNumber:e.target.value})}
                                value={caseContent.caseNumber}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPerson}/>
                                <input
                                className="cases-form" 
                                type="text"
                                id="client-name"
                                placeholder="المدعي"
                                onChange={(e)=>setCaseContent({...caseContent, clientName:e.target.value})}
                                value={caseContent.clientName}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPerson}/>
                                <input
                                className="cases-form" 
                                type="text"
                                id="opponent"
                                placeholder="المدعي عليه"
                                onChange={(e)=>setCaseContent({...caseContent, opponent:e.target.value})}
                                value={caseContent.opponent}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faScaleBalanced}/>
                                <input
                                className="cases-form"
                                type="text"
                                id="case-type"
                                placeholder="نوع الدعوى"
                                onChange={(e)=>setCaseContent({...caseContent, caseType:e.target.value})}
                                value={caseContent.caseType}
                                />
                            </div>
                            <div>
                                <input
                                className="cases-form" 
                                type="date"
                                id="from-session"
                                placeholder="من جلسة"
                                onChange={(e)=>setCaseContent({...caseContent, fromSession:e.target.value})}
                                value={caseContent.fromSession}
                                />
                            </div>
                            <div>
                                <input
                                className="cases-form"
                                type="date"
                                id="forward-session"
                                placeholder="إلى جلسة"
                                onChange={(e)=>setCaseContent({...caseContent, toSession:e.target.value})}
                                value={caseContent.toSession}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faFilePen}/>
                                <input
                                className="cases-form" 
                                type="text"
                                id="decision"
                                placeholder="القرار"
                                onChange={(e)=>setCaseContent({...caseContent, decision:e.target.value})}
                                value={caseContent.decision}
                                />
                            </div>
                            <button 
                            type="submit" 
                            className="btn-creating"
                            >إنشاء
                            </button>
                        </form>
                        <form onSubmit={(e)=>handleUpdateCase(e)}>
                            <button 
                            type="submit"
                            className="btn-creating"
                            >حفظ التعديلات</button>
                        </form>
                </section>
                <BackgroundLogo/>
            </section>
            <ShowCreatedCase upDataToInput = {upDataToInput} render = {render}/>
        </section>
        </Fragment>
    )
}
export default memo(CreateCases)
