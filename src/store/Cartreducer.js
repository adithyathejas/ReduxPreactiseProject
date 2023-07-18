import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cartOpen:false
}

const cartReducer = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        cartHandle(state){
            state.cartOpen = !state.cartOpen
        }
    }
})


export default cartReducer.reducer
export const cartActions = cartReducer.actions