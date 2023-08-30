import "./ProudProducts.css";
import React, {useEffect, useState} from "react";
import {fetchProductDataFromApi} from "../../api/ProductApi";
import {Link} from "react-router-dom";
import ProductItem from "../product/productitem/ProductItem";

function ProudProducts() {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetchProductDataFromApi();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="proud-products-grid">
                {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <ProductItem
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.image}/>
                        </Link>

                ))}
                </div>
            </div>
        </div>
    );
}

export default ProudProducts;