import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
const {product,handleRemoveProduct} = props;

    const {img,name,price,shipping,quantity} = props.product;
    
    return (
       
       
            <div className="review-items">
            <div>
                <img className="review-img" src={img} alt=""/>
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name">
                        
                        {name.length >20 ?name.slice(0,20) + '...': name}
                        </p>
                    <p>price :<span className="orange-clr">${price}</span></p>
                    <p>Shipping :<span className="orange-clr">${shipping}</span></p>
                    <p>Quantity :<span className='orange-clr'>{quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProduct(product)} className="delete-btn">
                        
                    <FontAwesomeIcon className="delete-icon" icon ={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;