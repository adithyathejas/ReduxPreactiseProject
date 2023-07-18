import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cartreducer';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const Dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>{Dispatch(cartActions.addItemHandler({
            name:title,
            price:price,quantity:1
          }))}}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
