import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cartOpen:false,
    items:[],
    totalQuantity:0,
    totalPrice:0
}

const cartReducer = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        cartHandle(state){
            state.cartOpen = !state.cartOpen
        },
        addItemHandler(state,action){
            const newItem= action.payload
            const existingItem=state.items.find(item=>item.name===newItem.name)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({...newItem,total:newItem.price})
            }else{
                existingItem.quantity++
                existingItem.total=existingItem.total+newItem.price
            }
        },
        removeItemHandler(state,action){
            const name = action.payload
            const existingItem = state.items.find((item)=>item.name===name)
            state.totalQuantity--
            if(existingItem.quantity===1){
                state.items=state.items.filter((item)=>item.name!==name)
            }else{
                existingItem.quantity--
                existingItem.total=existingItem.total-existingItem.price
                
            }
        }
    }
})


export default cartReducer.reducer
export const cartActions = cartReducer.actions