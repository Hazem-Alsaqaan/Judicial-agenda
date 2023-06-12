import React, { Fragment, useEffect, memo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {NavLink, useNavigate, useParams } from "react-router-dom";
import ProfileImage from "../profile_icone/ProfileIcone";
import "./RightSide.css"

const RightSide = ({dateNow,months, currentMonth,currentYear,setCurrentYear})=>{
    const {user} = useSelector((state)=>state.userSlice)
    const {isLoading} = useSelector((state)=>state.userSlice)
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let currentDayNumber = dateNow.getDate()
    const currentDayNumberOfWeek = dateNow.getDay()
    const currentDayName = dayName[currentDayNumberOfWeek]
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth ,1).getDay()
    const lastDayOfMonth = new Date(currentYear, currentMonth + lastDateOfMonth).getDay()
    const lastDayOfLastMonth = new Date(currentYear, currentMonth , 0).getDate()
    const [nums, setNums] = useState([])
    useEffect(()=>{
        const numbersDate = ()=>{
            const temp = []
            for(let i = firstDayOfMonth; i > 0; i--){
                temp.unshift(lastDayOfLastMonth - i + 1)
                temp.sort()
            }
            for(let i = 1; i <= lastDateOfMonth; i++){
                i < 10 ? temp.push(`0${i}`) : temp.push(i)
                // temp.push(i)
            }
            // for(let i = lastDayOfMonth; i < 2 ; i++){
            //     temp.push(i - lastDayOfMonth + 1)
            // }
            setNums(temp)
        }
        numbersDate()
    },[firstDayOfMonth, lastDateOfMonth, lastDayOfLastMonth, lastDayOfMonth])
    currentDayNumber = currentDayNumber < 10 ? `0${currentDayNumber}` : currentDayNumber
    
    const navigate = useNavigate()
    const param = useParams()
    //handle calender navigate
    const handleCalenderNav = (e)=>{
        // param.id = `${currentYear}-${currentMonth + 1}-${e.currentTarget.innerHTML}`
        const theMonth = currentMonth + 1
        param.id = theMonth < 10 ? 
        `${currentYear}-0${theMonth}-${e.currentTarget.innerHTML}` :
        `${currentYear}-${theMonth}-${e.currentTarget.innerHTML}`
        navigate(param.id)
    }
    return(
        <Fragment>
            <section className="right-side">
                <div className="head-right">
                    <h5><span>{months[currentMonth]}</span><span>{`${currentDayNumber} ${currentDayName}`}</span></h5>
                    <div className="user-icone">
                        <div className="img-section">
                            <ProfileImage/>
                        </div>
                        {isLoading ? 
                        <p>Loading...</p> :
                        <h6>{user.userName ? user.userName : user.displayName ? user.displayName : "unknown" }</h6>}
                    </div>
                </div>
                <table className="my-4">
                    <thead>
                        <tr>
                            {dayName.map((day, index)=> index === currentDayNumberOfWeek?<th key={index} className="active">{day}</th>:<th key={index}>{day}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {nums.map((num,index)=>
                            <td onClick={(e)=>handleCalenderNav(e)} key={index} className={ num === currentDayNumber ? "active" :""}>{`${num}`}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
                <NavLink to='/home/create'><p className="btn btn-outline-primary">Create</p></NavLink>
            </section>
        </Fragment>
    )
}
export default memo(RightSide)



