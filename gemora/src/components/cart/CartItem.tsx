import React from 'react';
import {Product} from '../product/ProductInterface';
import QuantitySelector from "./QuantitySelector";
import './ShoppingCart.css';
import {formatPrice} from "../../utils/utils";

interface CartItemProps {
    item: Product;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({item,quantity}) => {
    return (
        <div className="col-md-12 col-md-12 product-container">
            <div className="product-item">
                <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.name}
                    className="img-fluid product-image"
                />
                <div className="product-details">
                    <div className="product-name">{item.name}</div>
                    <div className="product-info">
                        <QuantitySelector productId={item.id} quantity={quantity}/>
                        <div className="product-price">
                            {formatPrice(item.price)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;