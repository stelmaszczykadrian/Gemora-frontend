import React, {useEffect, useState} from 'react';
import ProductForm, {ProductFormData} from "../../../components/product/productform/ProductForm";
import {fetchProductDataById, updateProduct} from "../../../api/ProductApi";
import {useNavigate, useParams} from "react-router-dom";
import {convertImageToBase64} from "../../../utils/utils";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

const EditProduct: React.FC = () => {
    const {id} = useParams();
    const pageTitle = "Edit product";
    const pageDescription = "You can edit product here.";
    const navigate = useNavigate();

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
                    navigate("/")
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

            toast.success("Product updated successfully.")

            setTimeout(() => {
                navigate(`/products/${id}`);
            }, 2000);
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 404) {
                    toast.error(error.response.data);
                } else {
                    toast.error('Something goes wrong.');
                }
            } else {
                console.error('Error sending data to backend:', error);
            }
        }
    };

    return (
        <div className="container">
            <ProductForm onSubmit={handleSubmit} initialData={initialData} pageTitle={pageTitle}
                         pageDescription={pageDescription} isUpdate/>
        </div>
    );
};

export default EditProduct;
