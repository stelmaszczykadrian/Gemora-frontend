import React from 'react';
import { Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/home/Home";
import ProductDetails from "../components/product/ProductDetails";
import Login from "../components/auth/Login";
import StoreProducts from "../components/store/StoreProducts";
import Contact from "../components/contact/Contact";
import NoPage from "../components/NoPage";
import Register from "../components/auth/Register";


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/store" element={<StoreProducts/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    );
};