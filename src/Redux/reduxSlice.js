import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
    name: 'calculate',
    initialState:{
        calculate:0
    },
    reducers:{
        reset(state){
            state.calculate = 0
        },
        calc(state,action){
            state.calculate = eval(action.payload)
        }
    }
})

export default calculateSlice.reducer
export const {reset,calc} = calculateSlice.actions 