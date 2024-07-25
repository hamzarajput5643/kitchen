import { MenuFormValues } from "@app/app/types/Menu";
import axiosInstance from "../../app/axiosInstance";
import { ImageResponse, Response } from "../../app/interfaces/Response";
import { MenuItem } from "@app/app/types/Kitchen";

export const getMenuPics = async (id: number | null): Promise<ImageResponse[]> => {
    try {
        if (id) {
            const response = await axiosInstance.get<ImageResponse[]>(`/api/menu/photo/${id}`);
            return response.data;
        }
        return [];
    } catch (error) {
        throw new Error('Failed to fetch menu images');
    }
};

export const getMenuTypes = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/menu/menu-types');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMainIngredients = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/menu/main-ingredients');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCuisineTypes = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/menu/cuisine');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getIngredients = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/menu/ingredients');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getGietTypes = async (): Promise<SelectListOption[]> => {
    try {
        const response = await axiosInstance.get<SelectListOption[]>('/api/menu/diet-types');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMenuTabData = async (tabId: number): Promise<MenuItem[]> => {
    try {
        const response = await axiosInstance.get<MenuItem[]>(`/api/menu/new/${tabId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addMenuItem = async (formData: MenuFormValues): Promise<Response<object>> => {
    try {
        const form = new FormData();

        for (const key in formData) {
            const value = formData[key as keyof MenuFormValues];
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                form.append(key, value.toString());
            }
        }

        if (Array.isArray(formData.ingredient)) {
            form.append('ingredient', JSON.stringify(formData.ingredient));
        }

        if (Array.isArray(formData.tags)) {
            form.append('tags', JSON.stringify(formData.tags));
        }

        if (formData.files && formData.files.length > 0) {
            Array.from(formData.files).forEach((file, index) => {
                form.append('files', file, file.name);
            });
        }

        const response = await axiosInstance.post<Response<object>>('/api/menu/save', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to add menu item');
        }
    } catch (error) {
        throw new Error(`Error adding menu item: ${error}`);
    }
};