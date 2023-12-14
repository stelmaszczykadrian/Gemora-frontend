import React, {useState} from 'react';
import ProductForm, {ProductFormData} from "../../../components/product/productform/ProductForm";
import {createProduct} from "../../../api/ProductApi";
import {AxiosError} from "axios";
import {toast} from "react-toastify";

const AddProduct: React.FC = () => {
    const pageTitle = "Add product";
    const pageDescription = "You can add product here.";

    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: 0,
        manufacturer: '',
        description: '',
        category: '',
        image: null,
    });

    const handleSubmit = async (formData: ProductFormData) => {
        const data = {
            name: formData.name,
            price: formData.price,
            manufacturer: formData.manufacturer,
            description: formData.description,
            category: formData.category,
            image: formData.image
        };
        try {
            await createProduct(data)

            toast.success("Product added successfully.")

            setFormData({
                name: '',
                price: 0,
                manufacturer: '',
                description: '',
                category: '',
                image: null,
            });

        } catch (error) {

            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 409) {
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
            <ProductForm onSubmit={handleSubmit} initialData={formData} pageTitle={pageTitle}
                         pageDescription={pageDescription} isUpdate={false}/>
        </div>
    );
};

export default AddProduct;