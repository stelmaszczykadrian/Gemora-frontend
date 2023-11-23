import axios from "axios";
import {BaseUrl} from "../constants/constants";

export async function createOrder(paymentData: any) {
    const response = await axios.post(`${BaseUrl}/api/orders`, paymentData);
    return response.data;
}

export async function saveOrder(orderDetails: any) {
    const response = await axios.post(`${BaseUrl}/api/orders/save-order`, orderDetails);
    return response.data;
}

export async function getAllOrders() {
    const response = await axios.get(`${BaseUrl}/api/orders`);
    return response.data;
}