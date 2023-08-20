import React from "react";
import '../store/StoreProducts.css'

interface ProductProps {
    name: string;
    price: number;
    imageUrl: string;
}

const Product: React.FC<ProductProps> = ({name, price, imageUrl}) => {
    return (
        <div>
            <div>
                <img
                    src={`data:image/jpeg;base64,${imageUrl}`}
                    alt={name}
                    className="card-img-top store-product-image"
                />
            </div>
            <div className="store-products-proud-container-product-details">
                <h5>{name}</h5>
                <p className="store-products-container-item-price">{price}$</p>
            </div>
        </div>

    )
};

export default Product;