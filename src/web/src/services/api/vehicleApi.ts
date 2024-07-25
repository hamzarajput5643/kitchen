import axiosInstance from "../../app/axiosInstance";
import { Response } from "../../app/interfaces/Response";
import { Vehicle, VehicleFormValues } from "../../app/types/Vehicle";

export const getUserVehicles = async (page: number = 1, pageSize: number = 10): Promise<Response<Vehicle[]>> => {
    try {
        const response = await axiosInstance.post<Response<Vehicle[]>>('/api/vehicle/vehicles', {
            page: page,
            pageSize: pageSize
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getVehicleMakes = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/vehicle/makes');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getVehicleColors = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/vehicle/colors');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getVehicleStates = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/vehicle/states');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getVehicleModels = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/vehicle/models');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loadVehicleModels = async (id: number): Promise<Response<SelectListOption[]>> => {
    try {
        const response = await axiosInstance.get<Response<SelectListOption[]>>(`/api/user/vehicle-model/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addUserVehicle = async (formData: VehicleFormValues): Promise<Response<Vehicle>> => {
    try {
        const response = await axiosInstance.post<Response<Vehicle>>('/api/vehicle/save', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to add user vehicle');
        }
    } catch (error) {
        throw new Error(`Error adding user vehicle: ${error}`);
    }
};

export const makeVehiclePrimary = async (id: number): Promise<Response<object>> => {
    try {
        const response = await axiosInstance.get(`/api/vehicle/primary/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to make user vehicle primary');
        }
    } catch (error) {
        throw new Error(`Error making user vehicle primary: ${error}`);
    }
};

export const delUserVehicle = async (id: number): Promise<Response<object>> => {
    try {
        const response = await axiosInstance.delete(`/api/vehicle/delete/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to delete user vehicle');
        }
    } catch (error) {
        throw new Error(`Error deleting user vehicle: ${error}`);
    }
};