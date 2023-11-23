import './Cart.css';
import React, {useContext, useState} from "react";
import CartContext from "../../context/CartContext";
import {calculateTotal, formatPrice} from "../../utils/utils";
import QuantitySelector from "../../components/cart/quantityselector/QuantitySelector";
import HeadingWithLines from "../../components/ui/headingwithlines/HeadingWithLines";
import OrderSummary from "../../components/ordersummary/OrderSummary";
import {Link, useNavigate} from "react-router-dom";
import LoginReminderModal from "../../components/ui/modals/loginreminder/LoginReminder";
import {shippingPrice} from "../../constants/constants";
import {UserContext} from "../../context/UserContext";


const Cart = () => {
    const {products} = useContext(CartContext);
    const totalValue = calculateTotal(products);
    const {currentUser} = useContext(UserContext);
    const [isLoginReminderOpen, setIsLoginReminderOpen] = useState(false);
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        if (!currentUser) {
            setIsLoginReminderOpen(true);
        } else {
            goToCheckout();
        }
    };

    const handleLoginReminderClose = () => {
        setIsLoginReminderOpen(false);
    };

    const goToCheckout = () => {
        navigate("/checkout")
    };

    return (
        <div className="container">
            <div className="cart-page-wrapper">
                <HeadingWithLines name="YOUR BAG"/>
                <div className="cart-page-top-container">
                    <LoginReminderModal isOpen={isLoginReminderOpen} handleCancel={handleLoginReminderClose}/>
                    <div>
                        <Link className="checkout-link" to="/products">
                            <button className="cart-page-continue-button">CONTINUE SHOPPING</button>
                        </Link>
                    </div>
                    <div>
                        <button className="cart-page-checkout-button" onClick={handleCheckoutClick}>CHECKOUT NOW
                        </button>
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
                        <button className="cart-page-proceed-button" onClick={handleCheckoutClick}>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;