import React, {useEffect, useState} from "react";
import './ProductCard.css';
import {Product} from "../../../interfaces/ProductInterface";
import {deleteProductById, fetchAllProductsDataFromApiBySortType} from "../../../api/ProductApi";
import {SortType} from "../../../constants/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from "react-router-dom";
import DeleteConfirmationModal from "../../ui/modals/deleteconfirmation/DeleteConfirmationModal";

export default function ProductCard() {
    const [productList, setProductList] = useState<Product[]>([]);
    const navigate = useNavigate();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productId, setProductId] = useState(0)

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

    const handleEditProduct = (productId:number) => {
        navigate(`/products/edit/${productId}`);
    };

    const deleteOffer = async () => {
        await deleteProductById(productId);
        window.location.reload();
        setIsDeleteModalOpen(false);
    };

    function handleDeleteOffer(id: number) {
        setProductId(id);
        setIsDeleteModalOpen(true);
    }


    return (
        <div className="container d-flex justify-content-center product-card-container">
            <div>
                <div className="container product-card-info">
                    <p className="product-card-total-products">Total products: <span className="product-list-length"> {productList.length}</span></p>
                    <p>
                        <Link to="/products/management/add">
                            <FontAwesomeIcon icon={faPlus} className="product-card-plus-icon"/>
                        </Link>
                    </p>
                </div>
                {productList.map((product) => (
                    <div className="product-card" key={product.id}>
                        <p className="product-card-title" onClick={() => handleProductClick(product.id)}>{product.name}</p>
                        <p><FontAwesomeIcon icon={faPencil} className="product-item-icon" onClick={() => handleEditProduct(product.id)}/></p>
                        <p><FontAwesomeIcon icon={faTrash} className="product-item-icon" onClick={() => handleDeleteOffer(product.id)}/></p>
                    </div>
                ))}
            </div>
            <DeleteConfirmationModal isOpen={isDeleteModalOpen} handleCancel={() => setIsDeleteModalOpen(false)}
                                     handleConfirm={deleteOffer}/>
        </div>


    );
}

