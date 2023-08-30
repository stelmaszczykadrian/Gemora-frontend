import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {Product} from "../interfaces/ProductInterface";


export const fetchProductDataFromApi = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};


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