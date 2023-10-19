import axios from "axios";
import {BaseUrl} from "../constants/constants";

export async function createOrder(paymentData: any) {
    const response = await axios.post(`${BaseUrl}/api/orders`, paymentData);
    return response.data;
}
