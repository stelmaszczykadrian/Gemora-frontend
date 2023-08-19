import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Product} from "./ProductInterface";
import './ProductDetails.css'
import {formatPrice} from "../../utils/utils";
import UserContext from "../../context/UserContext";
import {BaseUrl} from "../../constants/constants";


function ProductDetails() {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);
    const { currentUser} = useContext(UserContext);
    const [quantity, setQuantity] = useState(0);

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const addToCart = () => {
        if (product && quantity > 0) {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                axios.post(`${BaseUrl}/api/cart/${currentUser?.email}/${product.id}/${quantity}`)
                    .then(response => {
                        console.log('Product added to cart:', response.data);
                        setCart([...cart, product]);
                    })
                    .catch(error => {
                        console.error('Error adding product to cart:', error);
                    });
            }
        }
    };

    useEffect(() => {
        axios.get(`${BaseUrl}/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    return (
        <div>
            {product && (
                <>
                    <div className="product-details-container">
                        <div className="card-wrapper">
                            <div className="card-grid">
                                <div className="product-imgs">
                                    <img className="img" src={`data:image/jpeg;base64,${product.image}`}
                                         alt={product.name}
                                         width="500px" height="500px"/>
                                </div>
                                <div className="product-details-content">
                                    <div className="product-details-title">{product.name}</div>
                                    <div className="product-details-price">
                                        {formatPrice(product.price)}
                                    </div>
                                    <div>
                                        <p className="product-detail-description">{product.description}</p>
                                        <ul className="product-info-list">
                                            <li className="product-info-item">Manufacturer :
                                                <span> {product.manufacturer}</span>
                                            </li>
                                            <li className="product-info-item">Category :
                                                <span> {product.category}</span>
                                            </li>
                                            <li className="product-info-item">Shipping Area :
                                                <span> All over the world</span>
                                            </li>
                                            <li className="product-info-item">Shipping Fee :
                                                <span> Free</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="purchase-info-container">
                                        <div className="product-quantity">
                                            <div className="quantity-buttons-container">
                                                <button onClick={decreaseQuantity} className="quantity-decrease">-</button>
                                                <div className="quantity">{quantity}</div>
                                                <button onClick={increaseQuantity} className="quantity-increase">+</button>
                                            </div>
                                        </div>
                                        <div className="button-container">
                                            <button onClick={addToCart} className="add-to-cart-button">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductDetails;

