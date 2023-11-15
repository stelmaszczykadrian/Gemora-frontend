import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {Product} from "../interfaces/ProductInterface";

const errorMessage = "Error fetching data:";
const errorMessageDetails = "Error fetching product details:";

export const fetchAllProductsDataFromApiBySortType = async (sortType: string) => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products?sortBy=${sortType}`);
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        return [];
    }
};

export const fetchFeaturedProductsData = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products/featured`);
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        return [];
    }
}

export async function fetchProductDataById(id: string | undefined): Promise<Product | null> {
    if (!id) {
        return null;
    }

    try {
        const response = await axios.get<Product>(`${BaseUrl}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(errorMessageDetails, error);
        return null;
    }
}

export async function updateProduct(id: string | undefined, updatedData: any): Promise<boolean> {
    if (!id) {
        console.error('Invalid product id');
        return false;
    }

    try {
        await axios.put(`${BaseUrl}/api/products/edit/${id}`, updatedData);
        return true;
    } catch (error) {
        console.error(errorMessageDetails, error);
        return false;
    }
}

export async function deleteProductById(id: number): Promise<Product | null> {
    try {
        const response = await axios.delete<Product>(`${BaseUrl}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(errorMessageDetails, error);
        return null;
    }
}

export const fetchAllProductsDataByCategoryAndSort = async (category: string, sortType: string) => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products/sorted?category=${category}&sort=${sortType}`);
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        return [];
    }
};

export async function createProduct(data: any) {
    const response = await axios.post(`${BaseUrl}/api/products`, data);
    return response.data;
}

