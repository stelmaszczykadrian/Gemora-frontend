import React, {useState, useEffect} from "react";
import ProductCard from "../product/ProductCard";
import './StoreProducts.css';
import axios from "axios";

const StoreProducts: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(products)

    return (
            <div className="products-bg container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 mb-1">
                            <ProductCard
                                name={product.name}
                                price={product.price}
                                imageUrl={product.image}
                                totalPrice={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default StoreProducts;