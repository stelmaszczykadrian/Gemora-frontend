import React from "react";
import CartItemProps from "./CartItemProps";

const CartItem: React.FC<CartItemProps> = ({name, price, imageUrl,totalPrice}) => {
    return (
        <div className="card text-center mb-3">
            <img src={`data:image/jpeg;base64,${imageUrl}`} alt={name} className="card-img-top"
                 style={{maxHeight: '150px', objectFit: 'contain'}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Total Price: ${totalPrice.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default CartItem;