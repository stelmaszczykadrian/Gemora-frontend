import "./ProductItem.css";
import React from "react";
import {formatPrice} from "../../utils/utils";

interface ProductProps {
    name: string;
    price: number;
    imageUrl: string;
}

const ProductItem: React.FC<ProductProps> = ({name, price, imageUrl}) => {
    return (
        <>
            <div className="product-container">
                <div className="product-header">
                    <img
                        src={`data:image/jpeg;base64,${imageUrl}`}
                        alt={name}
                        className="card-img-top product-header-img"
                    />
                </div>
                <div className="product-details">
                    <p>{name}</p>
                    <p className="product-item-price ">
                        {formatPrice(price)}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;