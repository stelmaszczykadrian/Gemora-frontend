import React from 'react';
import './ShoppingCart.css';

interface QuantitySelectorProps {
    quantity: number;
    productId: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({quantity, productId}) => {

    const handleDecrease = () => {
    }

    const handleIncrease = () => {
    }

    return (
        <div className="d-flex align-items-center">
            <div className="cart-product-quantity">
                <div className="cart-quantity-buttons-container">
                    <button className="cart-quantity-decrease" onClick={handleDecrease}>-</button>
                    <div className="cart-quantity">{quantity}</div>
                    <button className="cart-quantity-increase" onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    );
};
export default QuantitySelector;