import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Orders = () => {
    const[products,setProducts]= useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd=>pd.id!==product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className="shop-container">
            <div className="review-items-container">
{/* product dile  shb product chole ashbe...amdr cart a ja add korsi ta dekhano lagbe..tai cart use korbo */}
           
           {
               cart.map(product => <ReviewItem
               handleRemoveProduct={handleRemoveProduct}
               key ={product.id}
               product={product}
               ></ReviewItem>)
           }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/inventory">
                        <button>proceed checkout</button>
                    </Link>
                </Cart>
            </div>
          
        </div>
    );
};

export default Orders;