import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Dummy = [{
  name: 'luxuarypen',
  quantity:1,
  price:250,
  description:'luxuary pen'
},{
  name: 'luxuarypencil',
  quantity:1,
  price:350,
  description:'luxuary pencil'
}]
const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{
        Dummy.map(item=><ProductItem
           key={item.name}
          title={item.name}
          price={item.price}
          description={item.description}
        />)
        }
      </ul>
    </section>
  );
};

export default Products;
