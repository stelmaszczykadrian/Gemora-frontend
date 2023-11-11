import React, {ChangeEvent, useEffect, useState} from "react";
import {
    fetchAllProductsDataFromApiBySortType
} from "../api/ProductApi";
import ProductList from "../components/product/productslist/ProductList";
import '../components/product/productfilter/ProductsFilter.css'

import ProductsFilter from "../components/product/productfilter/ProductsFilter";
import PageHeader from "../components/pageheader/PageHeader";
import {SortType} from "../constants/constants";

interface ProductsPageProps {
    pageName: string;
    pageTitle: string;
}


const ProductsPage: React.FC<ProductsPageProps> = ({ pageName, pageTitle }) => {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedValue, setSelectedValue] = useState("");


    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = event.target.value;
        setSelectedValue(selectedSortOption);
        const data = fetchDataBySortOption(selectedSortOption)
        setProducts(await data);
    };

    const fetchDataBySortOption = async (sortOption: string) => {
        switch (sortOption) {
            case "ascending":
                return fetchAllProductsDataFromApiBySortType(SortType.ASCENDING);
            case "descending":
                return fetchAllProductsDataFromApiBySortType(SortType.DESCENDING);
            default:
                return fetchAllProductsDataFromApiBySortType(SortType.NEWEST);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllProductsDataFromApiBySortType(SortType.NEWEST);
            setProducts(data);
        };
        fetchData();
    }, []);


    return (
        <div className="container">
            <PageHeader pageName={pageName} pageTitle={pageTitle}/>
            <ProductsFilter selectedValue={selectedValue} handleChange={handleChange}/>
            <ProductList products={products}/>
        </div>
    );
};

export default ProductsPage;