import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {Product} from "../interfaces/ProductInterface";

export const fetchAllProductsDataFromApiBySortType = async (sortType: string) => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products?sortBy=${sortType}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};


export const fetchFeaturedProductsData = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products/featured`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}


export async function fetchProductData(id: string | undefined): Promise<Product | null> {
    if (!id) {
        return null;
    }

    try {
        const response = await axios.get<Product>(`${BaseUrl}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}



export const fetchAllProductsDataByCategoryAndSort = async (category: string, sortType: string) => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products/sorted?category=${category}&sort=${sortType}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};