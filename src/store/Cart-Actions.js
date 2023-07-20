import { uiactions } from './Uireducer'
import { cartActions } from './Cartreducer'
import axios from 'axios'

export const sendCartData =  (cart)=>{
    return async (dispatch)=>{
        try{
        dispatch(uiactions.notificationHandler({status:'sending',title:'sending...',message:'sending request to server'}));
        const res = await axios.put('https://reduxpractise-4856c-default-rtdb.firebaseio.com/cart.json',JSON.stringify(cart))
        if(res.status==200){
            dispatch(uiactions.notificationHandler({status:'success',title:'sent',message:'updated sucessfully'}))
            console.log('sendcartsayshi')
          }
          setTimeout(()=>{dispatch(uiactions.notificationHandler({status:null,message:null,title:null}))},1000)
        }catch(e){
          dispatch(uiactions.notificationHandler({status:'error',title:'error',message:e.message}))
          console.log(e.message)
        }
    }
}

export const syncCartData = ()=>{
    return async (dispatch)=>{
        try{
                dispatch(uiactions.notificationHandler({status:'sending',title:'sending...',message:'sending request to server'}));
                const res= await axios.get('https://reduxpractise-4856c-default-rtdb.firebaseio.com/cart.json')
                const resdata = {...res.data,items:res.data.items || [] ,}
                console.log('hi',resdata)
                dispatch(cartActions.replaceCart(resdata))
                if(res.status==200){
                    dispatch(uiactions.notificationHandler({status:'success',title:'sent',message:'updated sucessfully'}))
                  }
        }catch(e){
            dispatch(uiactions.notificationHandler({status:'error',title:'error',message:e.message}))
        }
        setTimeout(()=>{dispatch(uiactions.notificationHandler({status:null,message:null,title:null}))},1000)
    } 
}