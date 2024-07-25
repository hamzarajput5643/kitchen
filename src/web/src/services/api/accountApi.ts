import axiosInstance from "../../app/axiosInstance";
import { Response } from "../../app/interfaces/Response";
import { AccountSettings } from "../../app/types/Settings";

export const getAccountSettings = async (): Promise<Response<AccountSettings>> => {
    try {
        const response = await axiosInstance.get('/api/user/get-settings');
        if (response.data.isSucceed) {
            return response.data;
        } else {
            throw new Error('Failed to update kitchen settings');
        }
    } catch (error) {
        throw error;
    }
}

export const updateAccountSettings = async (formData: UserProfile): Promise<Response<AccountSettings>> => {
    try {
        const form = new FormData();

        for (const key in formData) {
            const value = formData[key as keyof UserProfile];
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                form.append(key, value.toString());
            }
        }

        if (formData.profilePicture instanceof File) {
            form.append('profilePicture', formData.profilePicture);
        }

        const response = await axiosInstance.post<Response<AccountSettings>>('/api/user/update-settings', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to update account settings');
        }
    } catch (error) {
        throw new Error(`Error updating account settings: ${error}`);
    }
};