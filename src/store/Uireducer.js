import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    cartState:false,
    notification:{status:'',
    title:'',
    message: ''
}
}

const Uireducer = createSlice({
    name:'ui',
    initialState:initialState,
    reducers:{
        cartHandle(state){
            state.cartState = !state.cartState
        },
        notificationHandler(state,action){
            state.notification.status = action.payload.status
            state.notification.title = action.payload.title
            state.notification.message = action.payload.message
        }

    }
})
export const uiactions = Uireducer.actions
export default Uireducer.reducer
