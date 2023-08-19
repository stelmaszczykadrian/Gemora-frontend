import {Product} from "../components/product/ProductInterface";
import axios from "axios";
import {BaseUrl} from "../constants/constants";

export const fetchProductsFromApi = async (productIds: number[]): Promise<Product[]> => {
    const products: Product[] = [];
    for (const productId of productIds) {
        try {
            const response = await axios.get(`${BaseUrl}/api/products/${productId}`);
            products.push(response.data);
        } catch (error) {
            console.error("Error while downloading product data:", error);
        }
    }
    return products;
};


export const fetchProductDataFromApi = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};