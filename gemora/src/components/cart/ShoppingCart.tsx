import React, {useCallback, useContext, useMemo, useState} from "react";
import { Offcanvas } from "react-bootstrap";

import "./ShoppingCart.css";
import CartItem from "./CartItem";
import {formatPrice, groupBy} from "../../utils/utils";
import EmptyCartImg from "../../assets/empty-cart.jpg";
import CartContext from "../../context/CartContext";

export interface CartOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ShoppingCart: React.FC<CartOffcanvasProps> = ({ show, onHide }) => {
    const { products, addProduct, removeProduct } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [quantity] = useState<number>(0);


    const groupItems = useCallback(() => {
        const grouped = groupBy(products, (product) => product.id);

        const result = [];

        for (const key in grouped) {
            result.push({
                items: grouped[key],
                amount: grouped[key].length,
                totalPrice: grouped[key].reduce(
                    (partialSum, product) => partialSum + product.price,
                    0
                ),
            });
        }


        if(result.length > 0){
            let totalPrice = 0;
            result.forEach((element) =>{
                totalPrice += element.totalPrice
            })
            setTotalPrice(totalPrice);
        }


        return result;
    }, [products]);

    const groupedItems = useMemo(() => groupItems(), [groupItems]);


    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Shopping Cart({quantity})</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body">
                <div className="container">
                    <div className="cart-container">
                        {products.length > 0 ? (
                            <div className="row">
                                {groupedItems.map((item) => (
                                    <CartItem key={item.items[0].id} item={item.items[0]} quantity={item.amount}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="empty-cart-container">
                                <img src={EmptyCartImg} alt="empty-cart"/>
                                <p className="empty-cart-message">Your cart is empty</p>
                            </div>
                        )}
                    </div>
                </div>
            </Offcanvas.Body>
            {groupedItems.length > 0 && (
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