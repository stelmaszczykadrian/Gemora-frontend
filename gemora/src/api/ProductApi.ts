import axios from "axios";
import {BaseUrl} from "../constants/constants";


export const fetchProductDataFromApi = async () => {
    try {
        const response = await axios.get(`${BaseUrl}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};