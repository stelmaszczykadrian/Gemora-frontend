import './CartPage.css';
import React, {useContext} from "react";
import CartContext from "../../context/CartContext";
import {calculateTotal, formatPrice} from "../../utils/utils";
import QuantitySelector from "../../components/quantityselector/QuantitySelector";
import HeadingWithLines from "../../components/headingwithlines/HeadingWithLines";
import OrderSummary from "../../components/ordersummary/OrderSummary";
import {Link} from "react-router-dom";
import {shippingPrice} from "../../constants/constants";


const CartPage = () => {
    const {products} = useContext(CartContext);
    const totalValue = calculateTotal(products);

    return (
        <div className="container">
            <div className="cart-page-wrapper">
                <HeadingWithLines name="YOUR BAG"/>
                <div className="cart-page-top-container">
                    <div>
                        <Link className="checkout-link" to="/store">
                            <button className="cart-page-continue-button">CONTINUE SHOPPING</button>
                        </Link>
                    </div>
                    <div>
                        <Link className="checkout-link" to="/checkout">
                            <button className="cart-page-checkout-button">CHECKOUT NOW</button>
                        </Link>
                    </div>
                </div>
                <h2 className="heading-with-lines"/>
                <div className="cart-page-bottom-container">
                    <div className="cart-page-info-container">
                        {products.map((item) => (
                            <div key={item.id} className="cart-page-product-container">
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
                    <OrderSummary subtotal={totalValue} shippingPrice={shippingPrice}/>
                    <div className="checkout-button-container">
                        <Link className="checkout-link" to="/checkout">
                            <button className="cart-page-proceed-button">CHECKOUT NOW</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPage;