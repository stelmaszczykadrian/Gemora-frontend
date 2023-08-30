import { Link } from "react-router-dom";
import "./RecommendedSlider.css";
import React, {useEffect, useState} from "react";
import {fetchProductDataFromApi} from "../../api/ProductApi";
import {formatPrice} from "../../utils/utils";

function RecommendedItem() {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetchProductDataFromApi();
            setProducts(data);
        };
        fetchProducts();
    }, []);


    return (
        <>
            {products.map((item) => (
                <div key={item.id} className="recommended-product-item">
                    <Link
                        to={`/products/${item.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <div className="product-header">
                            <img
                                src={`data:image/jpeg;base64,${item.image}`}
                                alt={item.name}
                                className="img-fluid recommended-product-image"
                            />
                        </div>
                        <div className="recommended-product-description">
                            <p className="recommended-product-name">{item.name}</p>
                            <p className="recommended-product-price">
                                {formatPrice(item.price)}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default RecommendedItem;