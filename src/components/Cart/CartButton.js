import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cartreducer';
import {useSelector} from 'react-redux'
const CartButton = (props) => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const Dispatch = useDispatch()
  return (
    <button className={classes.button} onClick={()=>{Dispatch(cartActions.cartHandle())}}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
