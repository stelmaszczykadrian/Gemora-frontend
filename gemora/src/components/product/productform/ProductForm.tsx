import React, {useState} from 'react';
import './ProductForm.css';

interface ProductFormProps {
    onSubmit: (formData: ProductFormData) => void;
    initialData?: ProductFormData;
}

export interface ProductFormData {
    name: string;
    price: number;
    manufacturer: string;
    description: string;
    category: string;
    image: File | null;
}

const ProductForm: React.FC<ProductFormProps> = ({onSubmit, initialData }) => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: initialData?.name ?? '',
        price: initialData?.price ?? 0,
        manufacturer: initialData?.manufacturer ?? '',
        description: initialData?.description ?? '',
        category: initialData?.category ?? '',
        image: initialData?.image ?? null,
    });

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

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="container product-form-container">
            <form onSubmit={handleSubmit}>
                <div className="product-form-card">
                    <div className="product-form-top-section">
                        <h1 className="product-form-section-title">Add product</h1>
                        <p className="product-form-divider"></p>
                        <p className="product-form-section-txt">You can add product here.</p>
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
                            className="form-control product-form-field"
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
                        <input
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