import { createSlice } from "@reduxjs/toolkit";

const sagaSlise = createSlice({
    name:'saga',
    initialState:{},
    reducers:{fetchOnePost:(state,action)=>state =action.payload}
})

export const {fetchOnePost}=sagaSlise.actions
export const sagaReducer = sagaSlise.reducer