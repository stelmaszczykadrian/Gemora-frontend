import React from "react";
import './ProductList.css';

import {Link} from "react-router-dom";
import ProductItem from "../productitem/ProductItem";
import noProducts from "../../../assets/no-products.jpg";

const ProductList: React.FC<{ products: any[] }> = ({ products }) => {
    return (
        <>
            {products.length === 0 ? (
                <div className="not-products-container">
                    <img src={noProducts} alt="Not Found" className="not-product-image"/>
                    <p className="not-products-message">Sorry there are already not products.</p>
                </div>
            ) : (
                <div className="store-product-listing-container">
                    <div className="container">
                        <div className="store-products-grid">
                            {products.map((product) => (
                                <div key={product.id} className="container">
                                    <Link
                                        onClick={() => window.scrollTo(0, 0)}
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
            )}
        </>
    );
};

export default ProductList;