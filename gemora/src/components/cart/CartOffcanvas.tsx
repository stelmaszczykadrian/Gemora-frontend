import React, {useEffect, useState} from 'react';
import { Offcanvas} from 'react-bootstrap';
import axios from "axios";
import {AuthService} from "../../api/AuthService";
import {Product} from "../ProductInterface";
import {fetchProductsFromApi} from "../../api/ProductApi";
import {CartOffcanvasProps} from "./CartOffcanvasInteface";


const CartOffcanvas: React.FC<CartOffcanvasProps> = ({ show, onHide }) => {

    const [productsFromDatabase, setProductsFromDatabase] = useState<Product[]>([]);

    const userEmail = AuthService.getUserEmailFromToken();
    console.log(userEmail)

    useEffect(() => {
        const fetchDataFromDatabase = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/cart/${userEmail}`);
                const cartItems: { productId: number }[] = response.data;
                const productIds = cartItems.map(item => item.productId);
                const products = await fetchProductsFromApi(productIds);
                setProductsFromDatabase(products);
            } catch (error) {
                console.error("Error while retrieving data from the database:", error);
            }
        };
        fetchDataFromDatabase();
    }, []);

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart items:</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="container">
                    <div className="row">
                        {productsFromDatabase.map(item => (
                            <div className="col-md-12" key={item.id}>
                                <div>{item.name}</div>
                                <img src={`data:image/jpeg;base64,${item.image}`} alt={item.name} className="img-fluid" width="150px" height="150px"/>
                            </div>
                        ))}
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-end fw-bold fs-5">
                            Total: {productsFromDatabase.length} items
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffcanvas;