import React, {ChangeEvent, useEffect, useState} from "react";
import {fetchAllProductsDataByCategoryAndSort} from "../../../api/ProductApi";
import ProductList from "../../../components/product/productslist/ProductList";
import PageHeader from "../../../components/ui/pageheader/PageHeader";
import ProductsFilter from "../../../components/product/productfilter/ProductsFilter";
import {Product} from "../../../interfaces/ProductInterface";
import {SortType} from "../../../constants/constants";

interface ProductsPageProps {
    category: string;
    pageName: string;
    pageTitle: string;
}

const CategoryProduct: React.FC<ProductsPageProps> = ({category, pageName, pageTitle}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedCategory] = useState<string>(category);


    const fetchAndSetProducts = async (category: string, sortOption: string) => {
        const data = await fetchAllProductsDataByCategoryAndSort(category, sortOption);
        setProducts(data);
    };

    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSortOption = event.target.value;
        setSelectedValue(selectedSortOption);
        await handleSortOption(selectedSortOption);
    };

    const handleSortOption = async (sortOption: string) => {
        let sortType;
        switch (sortOption) {
            case "ascending":
                sortType = SortType.ASCENDING;
                break;
            case "descending":
                sortType = SortType.DESCENDING;
                break;
            default:
                sortType = SortType.NEWEST;
                break;
        }
        await fetchAndSetProducts(selectedCategory, sortType);
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchAndSetProducts(selectedCategory, SortType.NEWEST);
        };
        fetchData();
    }, [selectedCategory]);

    return (
        <div className="container">
            <PageHeader pageName={pageName} pageTitle={pageTitle}/>
            <ProductsFilter selectedValue={selectedValue} handleChange={handleChange}/>
            <ProductList products={products}/>
        </div>
    );
};

export default CategoryProduct;
