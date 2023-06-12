import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

//add new case
export const addNewCase = createAsyncThunk("cases/addNewCase", async(item, thunkApi)=>{
    try{
        const res = await axios.post(`https://different-pear-tunic.cyclic.app/api/v1/users/${item.user.id}/cases`, item)
        return res.data
    }catch(err){
        return (`can't add new case ${err}`)
    }
})
//get all cases
export const getAllCases = createAsyncThunk("cases/getAllCases", async(userId, thunkApi)=>{
    try{
        const res = await axios.get(`https://different-pear-tunic.cyclic.app/api/v1/users/${userId}/cases`)
        return res.data.data
    }catch(err){
        return (`can't get all cases ${err}`)
    }
})
//delete case
export const deleteCase = createAsyncThunk("cases/deleteCase", async(objID, thunckApi)=>{
    try{
        const res = await axios.delete(`https://different-pear-tunic.cyclic.app/api/v1/users/${objID.userId}/cases/${objID.caseId}`)
        return res.data
    }catch(err){
        return  `can't delete this case ${err}`
    }
})
// update case
export const updateCase = createAsyncThunk("cases/updateCase", async(item, thunkApi)=>{
    try{
        const res = await axios.put(`https://different-pear-tunic.cyclic.app/api/v1/users/${item.user._id}/cases/${item._id}`, item)
        return res.data
    }catch(err){
        return `can't update case ${err}`
    }
})