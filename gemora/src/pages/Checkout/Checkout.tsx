import React, {useContext, useState} from "react";
import {Form} from "react-bootstrap";
import CartContext from "../../context/CartContext";
import {calculateTotal} from "../../utils/utils";
import OrderSummary from "../../components/ordersummary/OrderSummary";
import {shippingPrice} from "../../constants/constants";
import './Checkout.css'
import {initiatePayment} from "../../services/PaymentService";
import HeadingWithLines from "../../components/ui/headingwithlines/HeadingWithLines";
import {Link} from "react-router-dom";
import UserContext from "../../context/UserContext";
import {saveOrder} from "../../api/OrderApi";

interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postcode: string;
    email: string;
    note: string;

}

const CheckoutForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postcode: "",
        email: "",
        note: ""

    });
    const {currentUser} = useContext(UserContext);
    const {products, clearCart} = useContext(CartContext);
    const totalValue = calculateTotal(products);

    console.log(products)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePayUClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const orderDetails = {
                formData,
                user: currentUser,
                products: products,
                totalAmount: totalValue,
            };


            window.location.href = await initiatePayment(totalValue);
            clearCart();
            await saveOrder(orderDetails);

        } catch (error) {
            console.error("Error initiating PayU payment:", error);
            alert("An error occurred while processing your payment. Please try again later.");
        }
    };

    return (
        <div className="container">
            <HeadingWithLines name="CHECKOUT"/>
            <div className="checkout-already-account">
                Already have a Gemora account?
                <Link to="/login">
                    <button className="checkout-signin-button">SIGN IN</button>
                </Link>
            </div>
            <Form onSubmit={handlePayUClick}>
                <div className="checkout-container">
                    <div className="checkout-left-section">
                        <div className="checkout-left-section-title">
                            Shipping Address:
                        </div>
                        <div className="checkout-name-section">
                            <input className="checkout-input-first" name="firstName" value={formData.firstName}
                                   onChange={handleChange} required placeholder="First Name*"/>
                            <input className="checkout-input-lastname" name="lastName" value={formData.lastName}
                                   onChange={handleChange} required placeholder="Last Name*"/>
                        </div>

                        <div className="checkout-address-section">
                            <input className="checkout-input-address" name="address" value={formData.address}
                                   onChange={handleChange} required placeholder="Address Line*"/>
                        </div>

                        <div className="checkout-town-section">
                            <input className="checkout-input-town" name="city" value={formData.city}
                                   onChange={handleChange} required placeholder="City/Town*"/>
                            <input className="checkout-input-postcode" name="postcode" value={formData.postcode}
                                   onChange={handleChange} required placeholder="Postcode*"/>
                        </div>

                        <div className="checkout-email-section">
                            <input className="checkout-input-email" name="email" value={formData.email}
                                   onChange={handleChange} required placeholder="Email Address*"/>
                        </div>

                        <div className="checkout-left-section-title">
                            Customer Note:
                        </div>
                        <textarea className="checkout-order-note-textarea" name="note" value={formData.note} onChange={handleChange}/>
                    </div>
                    <div className="checkout-right-section">
                        <OrderSummary subtotal={totalValue} shippingPrice={shippingPrice}/>
                    </div>
                </div>

                <div className="checkout-button-container">
                    <button type="submit" className="checkout-complete-order-button">COMPLETE ORDER</button>
                </div>
            </Form>
        </div>
    );
};

export default CheckoutForm;