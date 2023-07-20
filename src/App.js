import { useEffect,useState } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import { sendCartData,syncCartData } from './store/Cart-Actions';
import Notification from './components/UI/Notification';


let isInitial = true

function App() { 
  const cart = useSelector(state=>state.cart) 
  const notivisible = useSelector(state=>state.ui.notification.status)
  const Dispatch = useDispatch()
  useEffect(()=>{ Dispatch(syncCartData())},[])
  useEffect(()=>{
    const networkCall = async ()=>{
      if(isInitial==true){
         
          isInitial=false
         
      }else{
      
      
      if(cart.changed===true){
      Dispatch(sendCartData({items:cart.items,totalQuantity:cart.totalQuantity,totalPrice:cart.totalPrice}))
      }
    
  }
}
  networkCall()},[cart])
  const cartOpen = useSelector(state=>state.ui.cartState)
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
