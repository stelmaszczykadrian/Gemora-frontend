import React from 'react';
import {formatPrice} from "../../utils/utils";
import './OrderSummary.css';
interface OrderSummaryProps {
    subtotal: number;
    shippingPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({subtotal, shippingPrice}) => {
    return (
        <div className="summary-container">
            <div className="cart-page-summary-container">
                <h1 className="cart-page-summary-title">ORDER SUMMARY</h1>
                <div className="cart-page-summary-item">
                    <span>Subtotal:</span>
                    <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="cart-page-summary-item">
                    <span>Shipping cost:</span>
                    <span>{formatPrice(shippingPrice)}</span>
                </div>
                <div className="cart-page-summary-item">
                    <span>Grand Total:</span>
                    <span>{formatPrice(subtotal)}</span>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
