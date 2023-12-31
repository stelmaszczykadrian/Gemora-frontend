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
import {toast} from "react-toastify";

export interface ShippingDetails {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postcode: string;
    email: string;
    note: string;
    [key: string]: string;
}

const CheckoutForm = () => {
    const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setShippingDetails({
            ...shippingDetails,
            [name]: value,
        });
    };

    const simplifiedProducts = products.map(product => {
        return {
            id: product.id,
            name: product.name,
            quantity: product.quantity,
            price: product.price
        };
    });

    const handlePayUClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateFields(shippingDetails);
        const errorValues = Object.values(errors).filter(error => error !== "");

        if (errorValues.length > 0) {
            errorValues.forEach(error => {
                alert(error);
            });
            return;
        }

        try {
            const orderDetails = {
                shippingDetails: shippingDetails,
                user: currentUser,
                products: simplifiedProducts,
                totalAmount: totalValue,
            };

            const paymentData = await initiatePayment(totalValue);

            if (paymentData) {
                window.location.href = paymentData;
                clearCart();
                await saveOrder(orderDetails);
            } else {
                toast.error('Failed to initiate payment');
            }

        } catch (error) {
            console.error("Error initiating PayU payment:", error);
            alert("An error occurred while processing your payment. Please try again later.");
        }
    };

    const validateFields = (fields: ShippingDetails): Partial<Record<keyof ShippingDetails, string>> => {
        const errors: Partial<Record<keyof ShippingDetails, string>> = {};
        const validators: { [key in keyof ShippingDetails]: (value: string) => string } = {
            firstName: value => (!value ? "First name cannot be empty" : value.length < 2 ? "First name must be at least 2 characters long" : ""),
            lastName: value => (!value ? "Last name cannot be empty" : value.length < 2 ? "Last name must be at least 2 characters long" : ""),
            address: value => (!value ? "Address cannot be empty" : value.length < 5 ? "Address must be at least 5 characters long" : ""),
            city: value => (!value ? "City cannot be empty" : value.length < 3 ? "City must be at least 3 characters long" : ""),
            postcode: value => (!value ? "Postcode cannot be empty" : ""),
            email: value => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return !emailRegex.test(value) ? "Invalid email address ex. gemora@gemora.com" : "";
            },
            note: value => (value.length > 200 ? "Note cannot exceed 200 characters" : ""),
        };

        Object.keys(validators).forEach(key => {
            errors[key as keyof ShippingDetails] = validators[key as keyof ShippingDetails](fields[key as keyof ShippingDetails]);
        });

        return errors;
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
            <Form onSubmit={handlePayUClick} noValidate>
                <div className="checkout-container">
                    <div className="checkout-left-section">
                        <div className="checkout-left-section-title">
                            Shipping Address:
                        </div>
                        <div className="checkout-name-section">
                            <input className="checkout-input-first" name="firstName" value={shippingDetails.firstName}
                                   onChange={handleChange} required placeholder="First Name*"/>
                            <input className="checkout-input-lastname" name="lastName" value={shippingDetails.lastName}
                                   onChange={handleChange} required placeholder="Last Name*"/>
                        </div>

                        <div className="checkout-address-section">
                            <input className="checkout-input-address" name="address" value={shippingDetails.address}
                                   onChange={handleChange} required placeholder="Address Line*"/>
                        </div>

                        <div className="checkout-town-section">
                            <input className="checkout-input-town" name="city" value={shippingDetails.city}
                                   onChange={handleChange} required placeholder="City/Town*"/>
                            <input className="checkout-input-postcode" name="postcode" value={shippingDetails.postcode}
                                   onChange={handleChange} required placeholder="Postcode*"/>
                        </div>

                        <div className="checkout-email-section">
                            <input className="checkout-input-email" name="email" value={shippingDetails.email}
                                   onChange={handleChange} required placeholder="Email Address*"/>
                        </div>

                        <div className="checkout-left-section-title">
                            Customer Note:
                        </div>
                        <textarea className="checkout-order-note-textarea" name="note" value={shippingDetails.note}
                                  onChange={handleChange}/>
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