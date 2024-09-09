import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from './reduxSlice'

const store = configureStore({
    reducer:{
        calculateReducer: calculateSlice
    }
})

export default store