import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    status:'',
    title:'',
    message: ''
}

const Uireducer = createSlice({
    name:'notification',
    initialState:initialState,
    reducers:{
        notificationHandler(state,action){
            state.status = action.payload.status
            state.title = action.payload.title
            state.message = action.payload.message
        }

    }
})
export const uiactions = Uireducer.actions
export default Uireducer.reducer
