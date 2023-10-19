import React, {useContext, useState} from "react";
import {Form} from "react-bootstrap";
import CartContext from "../../context/CartContext";
import {calculateTotal} from "../../utils/utils";
import axios from "axios";
import OrderSummary from "../../components/ordersummary/OrderSummary";
import {shippingPrice} from "../../constants/constants";
import './CheckoutPage.css'

interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
}

const CheckoutForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
    });
    const {products, clearCart} = useContext(CartContext);
    const totalValue = calculateTotal(products);


    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handlePayUClick = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {

            const paymentData = {
                // firstName: formData.firstName,
                // lastName: formData.lastName,
                // address: formData.address,
                // city: formData.city,
                // postalCode: formData.postalCode,
                customerIp: "127.0.0.1",
                merchantPosId: "470782",
                currencyCode: "PLN",
                description: "Gemora",
                totalAmount: totalValue * 100

            };

            const response = await axios.post("http://localhost:8080/api/orders", paymentData);

            window.location.href = response.data;
            console.log(response);
            clearCart();
        } catch (error) {
            console.error("Error initiating PayU payment:", error);
        }
    };

    return (
        <div className="container">
            <Form onSubmit={handlePayUClick}>
                <div className="checkout-container">
                    <div className="checkout-left-section">
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="checkout-right-section">
                        <OrderSummary subtotal={totalValue} shippingPrice={shippingPrice}/>
                    </div>
                </div>
                <div className="checkout-button-container">
                    <button type="submit" className="cart-page-proceed-button">PayU Payment</button>
                </div>
            </Form>
        </div>
    );
};

export default CheckoutForm;