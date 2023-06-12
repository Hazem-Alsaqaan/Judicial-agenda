import React, { Fragment, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteCase, getAllCases } from "../../redux/action/casesAction";
import "./ShowCreatedCase.css"

const ShowCreatedCase = ({upDataToInput, render})=>{
    const param = useParams()
    const dispatch = useDispatch()
    const {isLoading} = useSelector((state)=>state.casesSlice)
    const {cases} = useSelector((state)=>state.casesSlice)
    const {user} = useSelector((state)=>state.userSlice)
    //handle delete case
    const handleDeleteCase = (item)=>{
        dispatch(deleteCase({userId:user._id, caseId:item._id}))
    }
    useEffect(()=>{
        const showCases = ()=>{
            if(!user._id){
                dispatch(getAllCases(user.apiKey))
            }else{
                dispatch(getAllCases(user._id))
            }
        }
        return ()=> showCases()
    },[dispatch, user._id, render, user.apiKey])
    return(
        <Fragment>
            <section className="get-cases">
                <table>
                    <thead>
                        <tr>
                            <th>الرقم</th>
                            <th className="two-col">المدعي</th>
                            <th className="two-col">ضد</th>
                            <th>النوع</th>
                            <th>من</th>
                            <th>إلى</th>
                            <th>القرار</th>
                            <th>تعديل/حذف</th>
                        </tr>
                    </thead>
                    {
                        cases.length > 0 ?
                        <tbody>
                            { isLoading ? <tr><td>Loading...</td></tr> :
                                cases.map((item, index)=>
                                item.toSession === param.id || item.fromSession === param.id ? 
                                <tr key={item._id}>
                                    <td>{item.caseNumber}</td>
                                    <td className="two-col">{item.clientName}</td>
                                    <td className="two-col">{item.opponent}</td>
                                    <td>{item.caseType}</td>
                                    <td>{item.fromSession}</td>
                                    <td>{item.toSession}</td>
                                    <td>{item.decision}</td>
                                    <td className="btn-div">
                                        <button
                                        onClick={()=>upDataToInput(item)}
                                        className="btn-edit">تعديل</button>
                                        <button
                                        onClick={()=>handleDeleteCase(item)}
                                        className="btn-delete">حذف</button>
                                    </td>
                                </tr>: ""
                                )
                            }
                        </tbody> 
                        :
                        <tbody>
                            <tr className="d-flex justify-content-center">
                                <td className="px-5 text-center text-nowrap">No Cases Here</td>
                            </tr>
                        </tbody>
                    }
                </table>
            </section>
        </Fragment>
    )
}
export default memo(ShowCreatedCase)