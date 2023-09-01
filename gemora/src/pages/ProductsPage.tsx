import React, {ChangeEvent, useEffect, useState} from "react";
import {
    fetchAllProductsDataFromApiBySortType
} from "../api/ProductApi";
import ProductList from "../components/productslist/ProductList";
import '../components/productfilter/ProductsFilter.css'

import ProductsFilter from "../components/productfilter/ProductsFilter";
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

        if (selectedSortOption === "ascending") {
            const data =  await fetchAllProductsDataFromApiBySortType(SortType.ASCENDING);
            setProducts(data);
        } else if (selectedSortOption === "descending") {
            const data =  await fetchAllProductsDataFromApiBySortType(SortType.DESCENDING);
            setProducts(data);
        }else {
            const data =  await fetchAllProductsDataFromApiBySortType(SortType.NEWEST);
            setProducts(data);
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