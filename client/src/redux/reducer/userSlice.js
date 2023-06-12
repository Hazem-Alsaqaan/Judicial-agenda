import {createSlice} from "@reduxjs/toolkit"
import { updateUser } from "../action/userAction"

const userStorage = JSON.parse(window.localStorage.getItem("user"))
const userSlice = createSlice({
    name: "user",
    initialState: {
        users:[],
        user: userStorage ? userStorage : null,
        isLoading: false, 
        error: ``,
        isLogoin: false
    },
    reducers: {
        //log in
        loginSucced: (state, action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isLogoin = true
        },
        //register
        registerSuccess: (state, action)=>{
            state.isLoading = false;
            state.users = [...state.users, action.payload]
        }
    },
    extraReducers: (builder)=>{
        //update user
        builder.addCase(updateUser.pending , (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(updateUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(updateUser.rejected, (state, action)=>{
            state.isLoading = false;
        })
    }
})

export const {loginSucced, registerSuccess} = userSlice.actions
export default userSlice.reducer