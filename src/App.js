import { useEffect,useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import { uiactions } from './store/Uireducer';
import Notification from './components/UI/Notification';

let isInitial = true

function App() { 
  const cart = useSelector(state=>state.cart) 
  const notivisible = useSelector(state=>state.ui.status)
  const Dispatch = useDispatch()
  useEffect(()=>{
    const networkCall = async ()=>{
      if(isInitial==true){
          isInitial=false
      }else{try{
      
      Dispatch(uiactions.notificationHandler({status:'sending',title:'sending...',message:'sending request to server'}))
      const res = await axios.put('https://reduxpractise-4856c-default-rtdb.firebaseio.com/cart.json',JSON.stringify(cart))
      if(res.status==200){
        Dispatch(uiactions.notificationHandler({status:'success',title:'sent',message:'updated sucessfully'}))
      }
    }catch(e){
      Dispatch(uiactions.notificationHandler({status:'error',title:'error',message:e.message}))
      console.log(e.message)
    }
    setTimeout(()=>{Dispatch(uiactions.notificationHandler({status:null,message:null,title:null}))},1000)
  }
}
  networkCall()},[cart])
  const cartOpen = useSelector(state=>state.cart.cartOpen)
  return (
    <>
    {notivisible&&<Notification></Notification>}
    <Layout>
      {console.log(notivisible)}
      {cartOpen?<Cart />:<></>}
      <Products />
    </Layout>
    </>

  );
}

export default App;
