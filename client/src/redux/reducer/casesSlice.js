import {createSlice} from "@reduxjs/toolkit"
import { addNewCase, deleteCase, getAllCases, updateCase } from "../action/casesAction"

const casesSlice = createSlice({
    name: "cases",
    initialState: {cases: [], isLoading: false, error: ``},
    reducers: {},
    extraReducers: (builder)=>{
        //get all user's cases
        builder.addCase(getAllCases.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(getAllCases.fulfilled, (state, action)=>{
            state.isLoading = false
            state.cases = action.payload
        })
        builder.addCase(getAllCases.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })
        //add new cases
        builder.addCase(addNewCase.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(addNewCase.fulfilled, (state, action)=>{
            state.isLoading = false
            state.cases = [...state.cases, action.payload]
        })
        builder.addCase(addNewCase.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error
        })
        //delete case
        builder.addCase(deleteCase.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(deleteCase.fulfilled, (state, action)=>{
            state.isLoading = false
            state.cases = state.cases.filter((item)=> {return item._id !== action.payload._id})
        })
        builder.addCase(deleteCase.rejected, (state, action)=>{
            state.isLoading = false
        })
        //update case
        builder.addCase(updateCase.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(updateCase.fulfilled, (state, action)=>{
            state.isLoading = false
            for(let i = 0; i <= state.cases.length; i++){
                if(state.cases[i] === action.payload){
                    return state.cases = state.cases.splice([i], 1, action.payload)
                }
            }
        })
        builder.addCase(updateCase.rejected, (state, action)=>{
            state.isLoading = false
        })
    }
})

export default casesSlice.reducer