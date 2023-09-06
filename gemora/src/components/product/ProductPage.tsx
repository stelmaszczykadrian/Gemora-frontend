import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Product} from "../../interfaces/ProductInterface";
import './ProductPage.css'
import {formatPrice} from "../../utils/utils";
import CartContext from "../../context/CartContext";
import checkBox from '../../assets/svg/checkbox.svg';
import RecommendedSlider from "../recommended/recommendedslider/RecommendedSlider";
import HeadingWithLines from "../headingwithlines/HeadingWithLines";
import img from '../../assets/images/banner2.jpg';
import FeatureBoxes from "../featureboxes/FeatureBoxes";
import PaymentLogos from "../paymentlogos/PaymentLogos";
import MainBanner from "../mainbanner/MainBanner";
import {fetchProductData} from "../../api/ProductApi";

import {toast} from "react-toastify";


function ProductPage() {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const {addProduct} = useContext(CartContext);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    useEffect(() => {
        fetchProductData(id)
            .then((data) => {
                if (data) {
                    setProduct(data);
                }
            });
    }, [id]);

    return (
        <div>
            <MainBanner />
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
                                    <h1 className="product-details-title">{product.name}</h1>
                                    <h1 className="product-details-price">
                                        {formatPrice(product.price)}
                                    </h1>
                                    <div>
                                        <p className="product-detail-description">{product.description}</p>
                                        <ul className="product-info-list">
                                            <div>
                                                <img src={checkBox} alt={"Check box"}></img>
                                                <span className="product-info-item">Satisfaction Guaranteed</span>
                                            </div>
                                            <div>
                                                <img src={checkBox} alt={"Check box"}></img>
                                                <span className="product-info-item">No Hassle Refunds</span>
                                                <div>
                                                </div>
                                                <img src={checkBox} alt={"Check box"}></img>
                                                <span className="product-info-item">Free shipping over the world</span>
                                            </div>
                                            <div>
                                                <img src={checkBox} alt={"Check box"}></img>
                                                <span className="product-info-item">Secure Payments</span>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="purchase-info-container">
                                        <div className="product-quantity">
                                            <div className="quantity-buttons-container">
                                                <button onClick={decreaseQuantity} className="quantity-decrease">-
                                                </button>
                                                <div className="quantity">{quantity}</div>
                                                <button onClick={increaseQuantity} className="quantity-increase">+
                                                </button>
                                            </div>
                                        </div>
                                        <div className="button-container">
                                            <button onClick={() => {
                                                if(!product){
                                                    return;
                                                }
                                                product.quantity = quantity;
                                                addProduct(product);
                                                toast.success("Product added.")
                                            }}
                                                    className="add-to-cart-button">ADD TO CART
                                            </button>
                                        </div>
                                    </div>

                                    <PaymentLogos/>

                                    <ul className="product-info-list">
                                        <li className="product-info-item">Manufacturer :
                                            <span> {product.manufacturer}</span>
                                        </li>
                                        <li className="product-info-item">Category :
                                            <span> {product.category}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <FeatureBoxes/>
            <HeadingWithLines name="Related Products"/>
            <RecommendedSlider/>
        </div>
    );
}

export default ProductPage;


