import React, {useContext, useState} from 'react';
import './ShoppingCart.css'
import axios from "axios";
import UserContext from "../../context/UserContext";
import {BaseUrl} from "../../constants/constants";

interface QuantitySelectorProps {
    quantity: number;
    productId: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({quantity, productId }) => {

    const [localQuantity, setLocalQuantity] = useState(quantity);
    const { currentUser} = useContext(UserContext);

    const handleIncrease = async () => {
        const newQuantity = localQuantity + 1;
        setLocalQuantity(newQuantity);
        await updateQuantity(newQuantity);
    };

    const handleDecrease = async () => {
        const newQuantity = localQuantity - 1;
        if (newQuantity > 0) {
            setLocalQuantity(newQuantity);
            await updateQuantity(newQuantity);
        }
    };

    const updateQuantity = async (newQuantity: number) => {
        try {
            await axios.post(`${BaseUrl}/api/cart/updateQuantity`, {
                productId,
                newQuantity,
                userId: currentUser?.id
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