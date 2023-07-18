import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cartreducer';
const CartButton = (props) => {
  const Dispatch = useDispatch()
  return (
    <button className={classes.button} onClick={()=>{Dispatch(cartActions.cartHandle())}}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
