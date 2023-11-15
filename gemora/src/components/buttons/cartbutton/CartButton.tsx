import React, {FC, MouseEvent, useContext} from 'react';
import {Button} from "react-bootstrap";
import CartContext from "../../../context/CartContext";
import CartIcon from "../../icons/CartIcon";
import './CartButton.css'


interface CartButtonProps {
    handleShow: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CartButton: FC<CartButtonProps> = ({handleShow}) => {
    const {products} = useContext(CartContext);

    return (
        <Button
            variant="outline-light"
            className="cart-button rounded-circle"
            onClick={handleShow}
        >
            <CartIcon/>
            <div
                className="product-counter rounded-circle bg-warning d-flex justify-content-center align-items-center"
            >
                {products.length}
            </div>
        </Button>
    );
}

export default CartButton;