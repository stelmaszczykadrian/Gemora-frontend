import React, {useState} from 'react';
import './ShoppingCart.css'
import axios from "axios";

interface QuantitySelectorProps {
    quantity: number;
    productId: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({quantity, productId }) => {

    const [localQuantity, setLocalQuantity] = useState(quantity);

    const handleIncrease = async () => {
        const newQuantity = localQuantity + 1;
        setLocalQuantity(newQuantity);
        await updateQuantity(newQuantity);
    };

    const handleDecrease = async () => {
        const newQuantity = localQuantity - 1;

        if (newQuantity >= 1) {
            setLocalQuantity(newQuantity);
            await updateQuantity(newQuantity);
        }
    };

    const updateQuantity = async (newQuantity: number) => {
        try {
            await axios.post('http://localhost:8080/api/cart/updateQuantity', {
                productId,
                newQuantity,
            });

        } catch (error) {
            console.error('Error during quantity update:', error);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <div className="cart-product-quantity">
                <div className="cart-quantity-buttons-container">
                    <button className="cart-quantity-decrease" onClick={handleDecrease}>-</button>
                    <div className="cart-quantity">{localQuantity}</div>
                    <button className="cart-quantity-increase" onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    );
};

export default QuantitySelector;