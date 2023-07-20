import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    
    items:[],
    totalQuantity:0,
    totalPrice:0,
    changed:false
}

const cartReducer = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        
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
            state.changed = true
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
                state.changed = true
            }
        },replaceCart(state,action){
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
            state.totalPrice = action.payload.totalPrice
    }
        
    }
})

export default cartReducer.reducer
export const cartActions = cartReducer.actions