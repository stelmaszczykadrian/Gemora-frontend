import React, {useEffect, useState} from "react";
import {getAllOrders, getOrdersByUserId} from "../../api/OrderApi";
import {SimplifiedProduct} from "../../interfaces/ProductInterface";
import {formatPrice} from "../../utils/utils";
import {ShippingDetails} from "../../pages/Checkout/Checkout";
import './OrdersCard.css';
import notOrders from '../../assets/no-orders.jpg';

export interface Order {
    id: number;
    orderDateTime: string;
    totalAmount: number;
    user: {
        email: string;
    };
    products: SimplifiedProduct[];
    shippingDetails: ShippingDetails;
}

export default function OrdersCard({ userId, userType }: { userId: number, userType: string }) {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;
                if (userType === 'ADMIN') {
                    data = await getAllOrders();
                } else if (userType === 'USER') {
                    data = await getOrdersByUserId(userId);
                }
                setOrders(data);
            } catch (error) {
                console.clear()
            }
        };
        fetchData();
    }, [userId]);


    const formatDateTime = (dateTimeString: string) => {
        const date = new Date(dateTimeString);
        return date.toLocaleString();
    };

    return (
        <div>
            {orders.length > 0 ? (
                <div className="container">
                    <p className="order-card-total-products">Total orders: <span
                        className="product-list-length"> {orders.length}</span></p>
                    <div className="order-card-container">
                        {orders.map((order,index) => (
                            <div className="order-card" key={order.id}>
                                <div key={`Orders_${index}`} className="order-info">
                                    <div className="left-section">
                                        <h4 className="red-color">Order ID: {order.id}</h4>
                                        <p>Order Date: <span className="red-color">{formatDateTime(order.orderDateTime)}</span>
                                        </p>
                                        <p>Total Amount: <span className="red-color">{formatPrice(order.totalAmount)}</span></p>
                                        <p>User Email: <span className="red-color">{order.user.email}</span></p>
                                        <div className="ordered-section"/>
                                        <div className="ordered-products">
                                            <h5 className="red-color">Ordered Products:</h5>
                                            <table className="order-table">
                                                <thead>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {order.products.map((product, index) => (
                                                    <tr key={`ProductTable_${index}`}>
                                                        <td>{product.name}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{formatPrice(product.price)}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="right-section">
                                        <h5 className="red-color">Shipping Details:</h5>
                                        <div>
                                            <p>{order.shippingDetails.firstName} {order.shippingDetails.lastName}</p>
                                            <p>{order.shippingDetails.address}</p>
                                            <p>{order.shippingDetails.postcode} {order.shippingDetails.city}</p>
                                            <p>{order.shippingDetails.email}</p>
                                            <h5 className="red-color">Note:</h5>
                                            <p>{order.shippingDetails.note}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="not-orders-container">
                    <img src={notOrders} className="not-orders-image" alt="Not orders image"></img>
                    <p className="empty-cart-message">Sorry there are already not orders.</p>
                </div>
            )}
        </div>
    );
}

