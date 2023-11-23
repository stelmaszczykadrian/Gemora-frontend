import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Product} from "../../../interfaces/ProductInterface";
import './SingleProduct.css'
import {formatPrice} from "../../../utils/utils";
import CartContext from "../../../context/CartContext";
import checkBox from '../../../assets/svg/checkbox.svg';
import RecommendedSlider from "../../../components/product/recommendedslider/RecommendedSlider";
import HeadingWithLines from "../../../components/ui/headingwithlines/HeadingWithLines";
import img from '../../assets/images/banner2.jpg';
import FeatureBoxes from "../../../components/ui/featureboxes/FeatureBoxes";
import PaymentLogos from "../../../components/ui/paymentlogos/PaymentLogos";
import MainBanner from "../../../components/ui/banners/mainbanner/MainBanner";
import {fetchProductDataById} from "../../../api/ProductApi";

import {toast} from "react-toastify";

const productPromises = [
    { text: "Satisfaction Guaranteed", id: 1 },
    { text: "No Hassle Refunds", id: 2 },
    { text: "Free shipping over the world", id: 3 },
    { text: "Secure Payments", id: 4 },
];


function SingleProduct() {
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

    const handleAddToCartClick = () => {
        if (!product) {
            return;
        }
        product.quantity = quantity;
        addProduct(product);
        toast.success("Product added.");
    };



    useEffect(() => {
        fetchProductDataById(id)
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
                                            {productPromises.map((info) => (
                                                <div key={info.id}>
                                                    <img src={checkBox} alt="Check box" />
                                                    <span className="product-info-item">{info.text}</span>
                                                </div>
                                            ))}
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
                                            <button onClick={handleAddToCartClick} className="add-to-cart-button">ADD TO CART</button>
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

export default SingleProduct;


