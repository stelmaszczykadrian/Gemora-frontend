import React, {useEffect, useState} from 'react';
import { Offcanvas} from 'react-bootstrap';
import axios from "axios";
import {AuthService} from "../../api/AuthService";
import {Product} from "../product/ProductInterface";
import {fetchProductsFromApi} from "../../api/ProductApi";
import {CartOffcanvasProps} from "./CartOffcanvasInteface";
import './Cart.css';
import CartItem from "./CartItem";
import {formatPrice} from "../../utils/utils";

const ShoppingCart: React.FC<CartOffcanvasProps> = ({ show, onHide }) => {
    const [productsFromDatabase, setProductsFromDatabase] = useState<Product[]>([]);
    const userEmail = AuthService.getUserEmailFromToken();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchDataFromDatabase = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/cart/${userEmail}`);
                const cartItems: { productId: number }[] = response.data;
                const productIds = cartItems.map(item => item.productId);
                const products = await fetchProductsFromApi(productIds);
                setProductsFromDatabase(products);

                const total = products.reduce((acc, product) => acc + product.price, 0);
                setTotalPrice(total);
            } catch (error) {
                console.error("Error while retrieving data from the database:", error);
            }
        };

        if (userEmail) {
            fetchDataFromDatabase();
        } else {
            setProductsFromDatabase([]);
            setTotalPrice(0);
        }
    }, [userEmail]);

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title />
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body">
                <div className="container">
                    <div className="cart-container">
                        {productsFromDatabase.length > 0 ? (
                            <div className="row">
                                {productsFromDatabase.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="empty-cart-message">This cart is empty.</div>
                        )}
                    </div>
                </div>
            </Offcanvas.Body>
            {productsFromDatabase.length > 0 && (
                <div className="offcanvas-end-container">
                    <div className="order-summary">
                        GRAND TOTAL:
                        <span className="total-price">
                            {formatPrice(totalPrice)}
                        </span>
                    </div>
                    <div>
                        <button className="rounded-0 checkout-button">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            )}
        </Offcanvas>
    );
};

export default ShoppingCart;