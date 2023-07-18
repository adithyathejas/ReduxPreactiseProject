import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cartreducer';

const CartItem = (props) => {
  const { title, quantity, price,total } = props.item;
  const Dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '} 
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>{Dispatch(cartActions.removeItemHandler(title))}}>-</button>
          <button onClick={()=>{Dispatch(cartActions.addItemHandler({name:title,quantity,price}))}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
