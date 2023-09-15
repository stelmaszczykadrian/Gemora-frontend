import React, {useContext} from 'react';
import './QuantitySelector.css';
import CartContext from "../../context/CartContext";
import {Product} from "../../interfaces/ProductInterface";

interface QuantitySelectorProps {
    quantity: number;
    product: Product;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({quantity, product}) => {
    const {increaseQuantity, decreaseQuantity} = useContext(CartContext);

    const handleDecrease = () => {
        if (product.quantity === 1) {
            return;

        }
        decreaseQuantity(product)
    }

    const handleIncrease = () => {
        increaseQuantity(product);
    }

    return (
        <div className="d-flex align-items-center">
            <div className="cart-product-quantity">
                <div className="cart-quantity-buttons-container">
                    <button className="cart-quantity-decrease" onClick={handleDecrease}>-</button>
                    <div className="cart-quantity">{product.quantity}</div>
                    <button className="cart-quantity-increase" onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    );
};
export default QuantitySelector;