import React from 'react';
import { Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../pages/Home";
import ProductPage from "../components/product/ProductPage";
import Login from "../components/auth/Login";
import Contact from "../components/contact/Contact";
import NoPage from "../components/NoPage";
import Register from "../components/auth/Register";
import ProductsPage from "../pages/ProductsPage";
import CategoryProductPage from "../pages/CategoryProductPage";
import {Categories} from "../constants/constants";

const allProductsPageName = "ALL PRODUCTS";
const allProductsPageTitle = "Immerse yourself in our extraordinary world of jewelry, where every piece is meticulously crafted to express your personality and uniqueness. Our unparalleled craftsmanship and commitment to quality ensure that each of our jewelry pieces is exceptional and enduring. With our 30-day money-back guarantee, you can make your choices with confidence. Visit Gemora today and embark on your journey through the world of exquisite jewelry.";

const engagementRingsPageName = 'ENGAGEMENTS RINGS';
const engagementRingsPageTitle = 'With their stunning selection of diamond engagement rings, you\'re sure to find the perfect ring to express your love. Their expert craftsmanship and commitment to quality ensures that your ring will last a lifetime. And with their 30-day money-back guarantee, you can be sure that you\'re making the right decision. So what are you waiting for? Visit Gemora today and start your journey to finding the perfect engagement ring.'

const earringsPageName = "EXQUISITE EARRINGS";
const earringsPageTitle = "Explore our extraordinary collection of diamond earrings, allowing you to express your love. Our expert craftsmanship and commitment to quality ensure that your earrings will bring joy for a lifetime. With our 30-day money-back guarantee, you can make your decision with confidence. Visit Gemora today and embark on your journey to find the perfect earrings.";

const pendantsPageName = "UNIQUE PENDANTS";
const pendantsPageTitle = "Discover our exceptional collection of pendants that let you express your personality and style. Our expert craftsmanship and commitment to quality guarantee that your pendants will be a perfect reflection of you. With our 30-day money-back guarantee, you can shop with peace of mind. Visit Gemora today and start your quest for the ideal pendant.";

const ringsPageName = "EXQUISITE RINGS";
const ringsPageTitle = "Explore our stunning selection of diamond rings, designed to express your love and commitment. Our expert craftsmanship and unwavering commitment to quality ensure that your ring will be a symbol of everlasting love. With our 30-day money-back guarantee, you can confidently choose the perfect ring. Visit Gemora today and begin your journey to find the ideal ring.";

const braceletsPageName = "BEAUTIFUL BRACELETS";
const braceletsPageTitle = "Discover our exquisite collection of bracelets that add elegance and charm to your style. Our expert craftsmanship and dedication to quality ensure that your bracelet will be a timeless accessory. With our 30-day money-back guarantee, you can shop with assurance. Visit Gemora today and enhance your style with the perfect bracelet.";

const gemstonesPageName = "STUNNING GEMSTONES";
const gemstonesPageTitle = "Explore our breathtaking collection of gemstones that radiate beauty and mystique. Our expert craftsmanship and commitment to quality ensure that your gemstone will captivate hearts. With our 30-day money-back guarantee, you can choose your gemstone with confidence. Visit Gemora today and uncover the allure of stunning gemstones.";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products/:id" element={<ProductPage/>}/>
            <Route path="/products/engagements" element={<CategoryProductPage category={Categories.ENGAGEMENTS} pageName={engagementRingsPageName} pageTitle={engagementRingsPageTitle}/>}/>
            <Route path="/products/earrings" element={<CategoryProductPage category={Categories.EARRINGS} pageName={earringsPageName} pageTitle={earringsPageTitle}/>}/>
            <Route path="/products/pendants" element={<CategoryProductPage category={Categories.PENDANTS} pageName={pendantsPageName} pageTitle={pendantsPageTitle}/>}/>
            <Route path="/products/rings" element={<CategoryProductPage category={Categories.RINGS} pageName={ringsPageName} pageTitle={ringsPageTitle}/>}/>
            <Route path="/products/bracelets" element={<CategoryProductPage category={Categories.BRACELETS} pageName={braceletsPageName} pageTitle={braceletsPageTitle}/>}/>
            <Route path="/products/gemstones" element={<CategoryProductPage category={Categories.GEMSTONES} pageName={gemstonesPageName} pageTitle={gemstonesPageTitle}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/store" element={<ProductsPage pageName={allProductsPageName} pageTitle={allProductsPageTitle}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
    );
};