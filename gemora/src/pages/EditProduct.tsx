import React, {useEffect, useState} from 'react';
import ProductForm, {ProductFormData} from "../components/product/productform/ProductForm";
import {fetchProductDataById, updateProduct} from "../api/ProductApi";
import {useParams} from "react-router-dom";
import {convertImageToBase64} from "../utils/utils";

const EditProduct: React.FC = () => {
    const { id } = useParams();
    const pageTitle = "Edit product";
    const pageDescription = "You can edit product here.";

    const [initialData, setInitialData] = useState<ProductFormData>({
        name: '',
        price: 0,
        manufacturer: '',
        description: '',
        category: '',
        image: null,
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await fetchProductDataById(id);

                if (product) {
                    setInitialData((prevData) => {
                        return {
                            ...prevData,
                            name: product.name,
                            price: product.price,
                            manufacturer: product.manufacturer,
                            description: product.description,
                            category: product.category,
                            image: product.image,
                        };
                    });
                } else {
                    console.error('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);


    const handleSubmit = async (formData: ProductFormData) => {
        const imageBase64 = await convertImageToBase64(formData.image as Blob);

        const updatedData = {
            name: formData.name,
            price: formData.price,
            manufacturer: formData.manufacturer,
            description: formData.description,
            category: formData.category,
            image: imageBase64,
        };

        try {
            await updateProduct(id, updatedData);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container">
            <ProductForm onSubmit={handleSubmit} initialData={initialData} pageTitle={pageTitle} pageDescription={pageDescription} isUpdate/>
        </div>
    );
};

export default EditProduct;
