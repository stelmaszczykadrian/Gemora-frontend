import React from 'react';
import ProductForm, {ProductFormData} from "../components/product/productform/ProductForm";
import {createProduct} from "../api/ProductApi";

const AddProduct: React.FC = () => {
    const convertImageToBase64 = (image: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    const base64Url = reader.result as string;
                    resolve(base64Url.split(',')[1]);
                } else {
                    reject('Failed to convert image to base64.');
                }
            };
            reader.onerror = () => {
                reject('Failed to read image file.');
            };
            reader.readAsDataURL(image);
        });
    };

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
            <ProductForm onSubmit={handleSubmit} initialData={initialData}/>
        </div>
    );
};

export default AddProduct;