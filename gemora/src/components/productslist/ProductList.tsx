import React from "react";
import './ProductList.css';

import {Link} from "react-router-dom";
import ProductItem from "../product/productitem/ProductItem";

const ProductList: React.FC<{ products: any[] }> = ({ products }) => {
    return (
        <div className="store-product-listing-container">
            <div className="container">
                <div className="store-products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="container">
                            <Link
                                to={`/products/${product.id}`}
                            >
                                <ProductItem
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.image}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;