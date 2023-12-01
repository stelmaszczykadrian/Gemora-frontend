import React, {ChangeEvent, useEffect, useState} from "react";
import { fetchProductsDataBySearchTermAndSort} from "../api/ProductApi";
import { SortType } from "../constants/constants";
import ProductList from "../components/product/productslist/ProductList";
import PageHeader from "../components/ui/pageheader/PageHeader";
import ProductsFilter from "../components/product/productfilter/ProductsFilter";
import {useLocation} from "react-router-dom";

export default function SearchedProducts() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const location = useLocation();

    useEffect(
        ()=>{
            const urlSearchParams = new URLSearchParams(location.search);
            const term = urlSearchParams.get('search');
            if(term){
                setSearchTerm(term)
                handleSearch(term)
            }
        },[]);

    const handleSearch = async (term: string) => {
        try {
            const response = await fetchProductsDataBySearchTermAndSort(term, SortType.NEWEST);
            setProducts(response);
            console.log(response);
        } catch (error) {
            console.error("Błąd pobierania danych:", error);
        }
    };

    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = event.target.value;
        setSelectedValue(selectedSortOption);

        if (searchTerm.trim() !== '') {
            const data = await fetchDataBySortOption(selectedSortOption);
            setProducts(data);
        }
    };

    const fetchDataBySortOption = async (sortOption: string) => {
        switch (sortOption) {
            case "ascending":
                return fetchProductsDataBySearchTermAndSort(searchTerm, SortType.ASCENDING)
            case "descending":
                return fetchProductsDataBySearchTermAndSort(searchTerm, SortType.DESCENDING)
            default:
                return await fetchProductsDataBySearchTermAndSort(searchTerm, SortType.NEWEST);
        }
    };

    return (
        <div className="container">
            <PageHeader pageName={`Search phrase: ${searchTerm}`} pageTitle={""}/>
            <ProductsFilter selectedValue={selectedValue} handleChange={handleChange}/>
            <ProductList products={products}/>
        </div>
    );
}

