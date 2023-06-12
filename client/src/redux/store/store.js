import {configureStore} from "@reduxjs/toolkit"
import casesSlice from "../reducer/casesSlice"
import userSlice from "../reducer/userSlice"

const store =  configureStore({
    reducer: {
        userSlice: userSlice,
        casesSlice: casesSlice
    }
})

export default store