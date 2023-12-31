import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux'

const Cart = (props) => {
  const Items = useSelector(state=>state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Items.map(Item=>
        <CartItem key={Item.name}
          item={{ title: Item.name, quantity: Item.quantity, price: Item.price ,total:Item.total}}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
