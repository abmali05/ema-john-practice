import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price} </p>
                <p><small>Seller: {seller} </small></p>
                <p><small>Ratings: {ratings} stars </small></p>
            </div>
            {/* <button onClick={props.handleAddToCart} className='btn-cart'>
                <p>Add to cart</p>
            </button> */}
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;