import React from 'react';
import { Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/home/Home";
import ProductPage from "../components/product/ProductPage";
import Login from "../components/auth/Login";
import StoreProducts from "../components/storeproducts/StoreProducts";
import Contact from "../components/contact/Contact";
import NoPage from "../components/NoPage";
import Register from "../components/auth/Register";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products/:id" element={<ProductPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/store" element={<StoreProducts/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    );
};