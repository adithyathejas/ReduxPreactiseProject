import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiactions } from '../../store/Uireducer';
import {useSelector} from 'react-redux'
const CartButton = (props) => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const Dispatch = useDispatch()
  return (
    <button className={classes.button} onClick={()=>{Dispatch(uiactions.cartHandle())}}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
