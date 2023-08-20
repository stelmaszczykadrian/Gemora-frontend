import React, {useState, useEffect} from "react";
import './StoreProducts.css';
import {fetchProductDataFromApi} from "../../api/ProductApi";
import {Link} from "react-router-dom";
import Product from "../product/Product";

const StoreProducts: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetchProductDataFromApi();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="store-product-listing-container">
            <div className="container">
                <div className="store-products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-container">
                            <Link
                                className="product-link"
                                to={`/product/${product.id}`}
                            >
                                <Product
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

export default StoreProducts;