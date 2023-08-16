import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {AuthService} from "../api/AuthService";
import {Product} from "./ProductInterface";

function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [cart, setCart] = useState<Product[]>([]);
    const userEmail = AuthService.getUserEmailFromToken();


    const addToCart = () => {
        if (product) {
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                const quantity = 1;
                axios.post(`http://localhost:8080/api/cart/${userEmail}/${product.id}/${quantity}`)
                    .then(response => {
                        console.log('Product added to cart:', response.data);
                        setCart([...cart, product]);
                    })
                    .catch(error => {
                        console.error('Error adding product to cart:', error);
                    });
            }
        }
    };


    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
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
                    <button onClick={addToCart}>Add to Cart</button>
                </>
            )}
        </div>
    );
}

export default ProductDetails;

