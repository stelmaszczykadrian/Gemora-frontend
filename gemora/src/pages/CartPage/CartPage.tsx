import './CartPage.css';
import React, {useContext, useState} from "react";
import CartContext from "../../context/CartContext";
import {formatPrice} from "../../utils/utils";
import QuantitySelector from "../../components/cart/QuantitySelector";
import HeadingWithLines from "../../components/headingwithlines/HeadingWithLines";


const CartPage = () => {
    const {products} = useContext(CartContext);
    const [shippingPrice] = useState(0);

    const calculateTotal = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };


    return (
        <div className="container">
            <div className="cart-page-wrapper">
                <HeadingWithLines name="YOUR BAG"/>
                <div className="cart-page-top-container">
                    <button className="cart-page-continue-button">CONTINUE SHOPPING</button>
                    <button className="cart-page-checkout-button">CHECKOUT NOW</button>
                </div>
                <h2 className="heading-with-lines"/>
                <div className="cart-page-bottom-container">
                    <div className="cart-page-info-container">
                        {products.map((item) => (
                            <div className="cart-page-product-container">
                                <div className="cart-page-product-details-container">
                                    <img
                                        src={`data:image/jpeg;base64,${item.image}`}
                                        alt={item.name}
                                        className="img-fluid cart-page-product-image"
                                    />
                                    <div className="cart-page-product-details">
                                        <span>
                                            <b>Product:</b> {item.name}
                                        </span>
                                    </div>
                                </div>
                                <div className="cart-page-price-details-container">
                                    <div className="cart-page-product-amount-container">
                                        <QuantitySelector product={item} quantity={item.quantity}/>
                                    </div>
                                    <div className="cart-page-product-price">
                                        {formatPrice(item.price)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="heading-with-lines"/>
                    <div className="summary-container">
                        <div className="cart-page-summary-container">
                            <h1 className="cart-page-summary-title">ORDER SUMMARY</h1>
                            <div className="cart-page-summary-item">
                                <span>Subtotal:</span>
                                <span>{formatPrice(calculateTotal())}</span>
                            </div>
                            <div className="cart-page-summary-item">
                                <span>Shipping cost:</span>
                                <span>{formatPrice(shippingPrice)}</span>
                            </div>
                            <div className="cart-page-summary-item">
                                <span>Grand Total:</span>
                                <span>{formatPrice(calculateTotal())}</span>
                            </div>
                            <button className="cart-page-proceed-button">CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;