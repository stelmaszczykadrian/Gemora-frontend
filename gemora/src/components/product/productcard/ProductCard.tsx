import React, {useEffect, useState} from "react";
import './ProductCard.css';
import {Product} from "../../../interfaces/ProductInterface";
import {fetchAllProductsDataFromApiBySortType} from "../../../api/ProductApi";
import {SortType} from "../../../constants/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";

export default function ProductCard() {
    const [productList, setProductList] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllProductsDataFromApiBySortType(SortType.NEWEST)
            .then((data) => {
                setProductList(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleProductClick = (productId:number) => {
        navigate(`/products/${productId}`);
    };


    return (
        <div className="container d-flex justify-content-center product-card-container">
            <div>
                <div className="container product-card-info">
                    <p className="product-card-total-products">Total products: <span className="product-list-length"> {productList.length}</span></p>
                    <p>
                        <Link to="/product/management/add">
                            <FontAwesomeIcon icon={faPlus} className="product-card-plus-icon"/>
                        </Link>
                    </p>
                </div>
                {productList.map((product, index) => (
                    <div className="product-card" onClick={() => handleProductClick(product.id)}>
                        <p className="product-card-title">{product.name}</p>
                        <p><FontAwesomeIcon icon={faPencil} className="product-item-icon"/></p>
                        <p><FontAwesomeIcon icon={faTrash} className="product-item-icon"/></p>
                    </div>
                ))}
            </div>
        </div>


    );
}

