import axios from "axios";
import { iAppResponse } from "../app/interfaces/Response";

const BASE_URL = "https://localhost:1002";

export const loginWithEmail = async (email: string, password: string) => {
    const response = await axios.post<
        iAppResponse<{ accessToken: string; refreshToken: string }>
    >(`${BASE_URL}/api/account/login`, {
        email: email,
        password: password,
    }).catch((ex) => {
        console.log(ex);
    });
    return response?.data;
};
export const refreshToken = async (data: {
    accessToken: string;
    refreshToken: string;
}) => {
    const response = await axios.post<
        iAppResponse<{ accessToken: string; refreshToken: string }>
    >(`${BASE_URL}/api/account/refreshToken`, data).catch((ex) => {
        console.log(ex);
    });;
    return response?.data;
};
export const registerWithEmail = async (email: string, password: string) => {
    const response = await axios.post<iAppResponse<{}>>(
        `${BASE_URL}/api/account/register`,
        {
            email: email,
            password: password,
        }
    ).catch((ex) => {
        console.log(ex);
    });
    return response?.data;
};
export const logoutUser = async () => {
    const response = await axios.post<iAppResponse<boolean>>(
        `${BASE_URL}/api/account/logout`
    ).catch((ex) => {
        console.log(ex);
    });;
    return response?.data;
};
export const profileApi = async () => {
    const response = await axios.post(`${BASE_URL}/account/profile`).catch((ex) => {
        console.log(ex);
    });
    return response?.data;
};

export const signInByGoogle = () => {

}