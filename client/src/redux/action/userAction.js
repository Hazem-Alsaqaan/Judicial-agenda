import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//update user
export const updateUser = createAsyncThunk("user/updateUser", 
async(item, thunkApi)=>{
    try{
        const res = await axios.put(`https://different-pear-tunic.cyclic.app/api/v1/users/${item._id}`, item)
        return res.data
    }catch(err){
        console.log(`can't update user ${err}`)
    }
})

