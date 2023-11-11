import React from 'react';
import axios from 'axios';
import ProductForm, {ProductFormData} from "./ProductForm";

const AddProductComponent: React.FC = () => {


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

        const body = {
            name: formData.name,
            price: formData.price,
            manufacturer: formData.manufacturer,
            description: formData.description,
            category: formData.category,
            image: imageBase64
        };

        try {
            const response = await axios.post('http://localhost:8080/api/products', body);

            console.log('Response:', response.data);

        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="container">
            <ProductForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default AddProductComponent;