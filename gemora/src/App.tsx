import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./components/ProductDetails";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
