import React from "react";

import ProductCard from "../components/product/productcard/ProductCard";
import PageHeader from "../components/ui/pageheader/PageHeader";

const productManagementPageName = "PRODUCT MANAGEMENT";
const productManagementPageTitle = "Effortlessly Manage Your Products";

const ProductManagement = () => {
    return <>
        <PageHeader pageName={productManagementPageName} pageTitle={productManagementPageTitle} />
        <ProductCard/>
    </>;
};

export default ProductManagement;