import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Product {
    name: string;
    description: string;
    manufacturer: string;
    category: string;
    price: number;
    image: string;

}

function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                console.log(response)
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            {product && (
                <>
                    <h2>Name: {product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Manufacturer: {product.manufacturer}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} width="300px" height="300px"/>
                </>
            )}
        </div>
    );
}

export default ProductDetails;

