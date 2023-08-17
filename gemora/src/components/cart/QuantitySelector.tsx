import React, {useState} from 'react';
import './Cart.css'

const QuantitySelector: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <div className="cart-product-quantity">
                <button onClick={() => handleDecrease()}>
                    -
                </button>
                <div className="count">{quantity}</div>
                <button onClick={() => handleIncrease()}>
                    +
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;