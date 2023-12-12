import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {Order} from "../components/orders/OrdersCard";

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

export async function getOrdersByUserId(id: number): Promise<Order[]> {
    try {
        const response = await axios.get<Order[]>(`${BaseUrl}/api/orders/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch orders');
    }
}
