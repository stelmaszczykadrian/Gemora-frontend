import React, {useContext} from 'react';
import {Product} from '../../../interfaces/ProductInterface';
import QuantitySelector from "../quantityselector/QuantitySelector";
import './CartItem.css';
import {formatPrice} from "../../../utils/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import CartContext from "../../../context/CartContext";

interface CartItemProps {
    item: Product;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({item, quantity}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className="col-md-12 col-md-12 cart-product-container">
            <div className="cart-product-item">
                <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.name}
                    className="img-fluid cart-product-image"
                />
                <div className="cart-product-details">
                    <div className="cart-product-name">{item.name}</div>
                    <div className="cart-product-info">
                        <QuantitySelector product={item} quantity={quantity}/>
                        <div className="cart-product-price">
                            {formatPrice(item.price)}
                        </div>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => removeProduct(item)}
                            style={{cursor: 'pointer'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;