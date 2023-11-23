import React from 'react';
import ProductForm, {ProductFormData} from "../../../components/product/productform/ProductForm";
import {createProduct} from "../../../api/ProductApi";
import {convertImageToBase64} from "../../../utils/utils";

const AddProduct: React.FC = () => {
    const pageTitle = "Add product";
    const pageDescription = "You can add product here.";

    const handleSubmit = async (formData: ProductFormData) => {
        const imageBase64 = await convertImageToBase64(formData.image as Blob);

        const data = {
            name: formData.name,
            price: formData.price,
            manufacturer: formData.manufacturer,
            description: formData.description,
            category: formData.category,
            image: imageBase64
        };
        try {
            await createProduct(data)
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const initialData: ProductFormData = {
        name: '',
        price: 0,
        manufacturer: '',
        description: '',
        category: '',
        image: null,
    };

    return (
        <div className="container">
            <ProductForm onSubmit={handleSubmit} initialData={initialData} pageTitle={pageTitle} pageDescription={pageDescription} isUpdate={false}/>
        </div>
    );
};

export default AddProduct;