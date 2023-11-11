import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {RegisterFormValues} from "../components/auth/register/RegisterBox";
import {LoginFormValues} from "../components/auth/login/LoginBox";

export const registerUser = async (values: RegisterFormValues) => {
    try {
        const response = await axios.post(`${BaseUrl}/api/v1/auth/register`, values);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const authenticateUser = async (values: LoginFormValues): Promise<LoginFormValues> => {
    try {
        const response = await axios.post<LoginFormValues>(`${BaseUrl}/api/v1/auth/authenticate`, values);
        return response.data;
    } catch (error) {
        throw error;
    }
};