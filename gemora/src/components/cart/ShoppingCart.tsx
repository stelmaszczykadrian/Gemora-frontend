import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import axios from "axios";
import { AuthService } from "../../api/AuthService";
import { Product } from "../product/ProductInterface";
import { fetchProductsFromApi } from "../../api/ProductApi";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import { formatPrice } from "../../utils/utils";

interface CartItem {
    productId: number;
    quantity: number;
}

export interface CartOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ShoppingCart: React.FC<CartOffcanvasProps> = ({ show, onHide }) => {
    const [productsFromDatabase, setProductsFromDatabase] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [productQuantity, setProductQuantity] = useState<number[]>([]);
    const userEmail = AuthService.getUserEmailFromToken();

    useEffect(() => {
        const fetchDataFromDatabase = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/cart/${userEmail}`);
                const cartItems = response.data as CartItem[];

                const productIds = cartItems.map(item => item.productId);
                const products = await fetchProductsFromApi(productIds);
                setProductsFromDatabase(products);

                const total = products.reduce((acc, product) => acc + product.price, 0);
                setTotalPrice(total);

                const productQuantityArray = cartItems.map(item => item.quantity);
                setProductQuantity(productQuantityArray);
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
                                {productsFromDatabase.map((item, index) => (
                                    <CartItem key={item.id} item={item} quantity={productQuantity[index]} />
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