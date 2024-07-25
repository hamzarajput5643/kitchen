import { AxiosRequestConfig } from "axios";
import axiosInstance from "../../app/axiosInstance";
import { Response } from "../../app/interfaces/Response";
import { PostalRequest } from "../../app/types/Location";
import { AddressFormValues } from "../../app/types/Address";
import { Address } from "cluster";

export const getUserAddresses = async (page: number = 1, pageSize: number = 10): Promise<Response<Address[]>> => {
    try {
        const response = await axiosInstance.post<Response<Address[]>>('/api/user/address', {
            page: page,
            pageSize: pageSize
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPostalCodeByState = async (stateName: string, cityName: string): Promise<string> => {
    try {
        const requestPayload: PostalRequest = { stateName, cityName };
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await axiosInstance.post<string>('/api/location/postalcode', requestPayload, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addUserAddress = async (formData: AddressFormValues): Promise<Response<Address>> => {
    try {
        const response = await axiosInstance.post<Response<Address>>('/api/user/save-address', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to add user address');
        }
    } catch (error) {
        throw new Error(`Error adding user address: ${error}`);
    }
};

export const makeAddressBilling = async (id: number): Promise<Response<object>> => {
    try {
        const response = await axiosInstance.put(`/api/user/billing/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to make user vehicle primary');
        }
    } catch (error) {
        throw new Error(`Error making user vehicle primary: ${error}`);
    }
};

export const delUserAddress = async (id: number): Promise<Response<object>> => {
    try {
        const response = await axiosInstance.delete(`/api/user/delete-address/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to delete user address');
        }
    } catch (error) {
        throw new Error(`Error deleting user address: ${error}`);
    }
};