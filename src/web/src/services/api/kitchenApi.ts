import axiosInstance from "@app/app/axiosInstance";
import { KitchenSettings } from "@app/app/types/Settings";
import { ImageResponse, KitchenPicsRequest, Response } from "@app/app/interfaces/Response";
import { UserMenuItem } from "../../app/types/User";
import { AxiosRequestConfig } from "axios";

export const getUserMenuItems = async (status: number, page: number = 1, pageSize: number = 10): Promise<UserMenuItem> => {
    try {
        const response = await axiosInstance.post<UserMenuItem>('/api/menu/items', {
            status: status,
            page: page,
            pageSize: pageSize
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getKitchenSettings = async (): Promise<Response<KitchenSettings>> => {
    try {
        const response = await axiosInstance.get('/api/kitchen/get-settings');
        if (response.data.isSucceed) {
            return response.data;
        } else {
            throw new Error('Failed to update kitchen settings');
        }
    } catch (error) {
        throw error;
    }
}

export const getKitchenImages = async (kitchenId: number | null): Promise<ImageResponse[]> => {
    try {
        if (kitchenId !== 0 && kitchenId !== null) {
            const response = await axiosInstance.get<ImageResponse[]>(`/api/kitchen/gallery/${kitchenId}`);
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        throw new Error('Failed to fetch kitchen images');
    }
};

export const getKitchenPics = async (kitchenId: number | null, type: string | null): Promise<ImageResponse | null> => {
    try {
        if (kitchenId && type) {
            const requestPayload: KitchenPicsRequest = { kitchenId, type };
            const config: AxiosRequestConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await axiosInstance.post('/api/kitchen/photos', requestPayload, config);
            return response.data;
        }
        return null;
    } catch (error) {
        throw new Error('Failed to fetch kitchen images');
    }
};

export const updateKitchenSettings = async (formData: KitchenSettings): Promise<Response<object>> => {
    try {
        const form = new FormData();

        for (const key in formData) {
            const value = formData[key as keyof KitchenSettings];
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                form.append(key, value.toString());
            }
        }

        if (formData.backgroundImage instanceof File) {
            form.append('backgroundImage', formData.backgroundImage);
        }

        if (formData.profileImage instanceof File) {
            form.append('profileImage', formData.profileImage);
        }

        if (formData.galleryPhotos) {
            for (let i = 0; i < formData.galleryPhotos.length; i++) {
                const file = formData.galleryPhotos[i] as any;
                form.append('galleryPhotos', file, file.name);
            }
        }

        const response = await axiosInstance.post<Response<object>>('/api/kitchen/update-settings', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to update kitchen settings');
        }
    } catch (error) {
        throw new Error(`Error updating kitchen settings: ${error}`);
    }
};