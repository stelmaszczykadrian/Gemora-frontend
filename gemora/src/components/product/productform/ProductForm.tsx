import React, {useEffect, useRef, useState} from 'react';
import './ProductForm.css';

interface ProductFormProps {
    onSubmit: (formData: ProductFormData) => void;
    initialData?: ProductFormData;
    pageTitle: string;
    pageDescription: string;
    isUpdate: boolean
}

export interface ProductFormData {
    name: string;
    price: number;
    manufacturer: string;
    description: string;
    category: string;
    image: File | Blob | string | null;
}

const ProductForm: React.FC<ProductFormProps> = ({onSubmit, initialData, pageTitle, pageDescription, isUpdate }) => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: 0,
        manufacturer: '',
        description: '',
        category: '',
        image: null,
    });

    useEffect(() => {
        if (initialData) {
            setFormData((prevData) => ({
                ...prevData,
                name: initialData.name,
                price: initialData.price,
                manufacturer: initialData.manufacturer,
                description: initialData.description,
                category: initialData.category,
                image: initialData.image || null,
            }));
        }

        console.log(initialData)
    }, [initialData]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const imageFile = event.target.files[0];
            setFormData((prevData) => ({
                ...prevData,
                image: imageFile,
            }));
        }
    };

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedCategory = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            category: selectedCategory,
        }));
    }

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     onSubmit(formData);
    //     if(inputRef.current){
    //         inputRef.current.value = ''
    //     }
    // };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const containsOnlyLetters = /^[A-Za-z\s]+$/;

        if (
            formData.price > 0 &&
            formData.name.length <= 20 &&
            containsOnlyLetters.test(formData.name) &&
            formData.manufacturer.length <= 20 &&
            containsOnlyLetters.test(formData.manufacturer) &&
            formData.description.length <= 20 &&
            containsOnlyLetters.test(formData.description)
        ) {
            onSubmit(formData);
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        } else {
            if (formData.name.length > 20) {
                alert('Name should be 20 characters or less.');
            }
            if (!containsOnlyLetters.test(formData.name)) {
                alert('Name should contain only letters.');
            }
            if (formData.manufacturer.length > 20) {
                alert('Manufacturer should be 20 characters or less.');
            }
            if (!containsOnlyLetters.test(formData.manufacturer)) {
                alert('Manufacturer should contain only letters.');
            }
            if (formData.description.length > 20) {
                alert('Description should be 20 characters or less.');
            }
            if (!containsOnlyLetters.test(formData.description)) {
                alert('Description should contain only letters.');
            }
        }
    };

    return (
        <div className="container product-form-container">
            <form onSubmit={handleSubmit}>
                <div className="product-form-card">
                    <div className="product-form-top-section">
                        <h1 className="product-form-section-title">{pageTitle}</h1>
                        <p className="product-form-divider"></p>
                        <p className="product-form-section-txt">{pageDescription}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control product-form-field"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                            Price
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="10000"
                            className="form-control product-form-field"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="manufacturer" className="form-label">
                            Manufacturer
                        </label>
                        <input
                            type="text"
                            className="form-control product-form-field"
                            id="manufacturer"
                            name="manufacturer"
                            value={formData.manufacturer}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control product-form-field product-textarea"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">
                            Category
                        </label>
                        <select
                            className="form-select product-form-field"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleSelectChange}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="ENGAGEMENTS">ENGAGEMENTS</option>
                            <option value="EARRINGS">EARRINGS</option>
                            <option value="PENDANTS">PENDANTS</option>
                            <option value="RINGS">RINGS</option>
                            <option value="BRACELETS">BRACELETS</option>
                            <option value="GEMSTONES">GEMSTONES</option>
                            <option value="FEATURED">FEATURED</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                            Image
                        </label>
                        {isUpdate&&<img
                            src={`data:image/jpeg;base64,${formData.image}`}
                            className="card-img-top product-header-img"
                        />}

                        <input
                            ref={inputRef}
                            type="file"
                            className="form-control product-form-field"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="product-form-button">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default ProductForm;