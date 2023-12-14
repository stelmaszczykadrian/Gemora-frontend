import {Link} from "react-router-dom";
import "./RecommendedProduct.css";
import React, {useEffect, useState} from "react";
import {fetchFeaturedProductsData} from "../../../api/ProductApi";
import {formatPrice} from "../../../utils/utils";
import Loading from "../../ui/loading/Loading";

function RecommendedProduct() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetchFeaturedProductsData();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            {products.length === 0 ? (
                <Loading/>
            ) : (
                products.map((item) => (
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
                ))
            )}
        </>
    );
}

export default RecommendedProduct;