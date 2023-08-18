import React, {useState, useEffect} from "react";
import ProductCard from "../product/ProductCard";
import './StoreProducts.css';
import {fetchProductDataFromApi} from "../../api/ProductApi";
import {Link} from "react-router-dom";

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
            <div className="products-bg container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 mb-1">
                            <Link className="customLink" to={`/product/${product.id}`}>
                                <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.image}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default StoreProducts;