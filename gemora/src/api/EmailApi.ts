import axios from "axios";
import {BaseUrl} from "../constants/constants";

export async function addEmail(email: any) {
    const response = await axios.post(`${BaseUrl}/api/email`, email);
    return response.data;
}