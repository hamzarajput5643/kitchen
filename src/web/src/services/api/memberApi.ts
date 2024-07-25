import axiosInstance from "@app/app/axiosInstance";
import { MembershipType } from "@app/app/interfaces/MembershipType";

export const getMembershipTypes = async (): Promise<MembershipType[]> => {
    try {
        const response = await axiosInstance.get<MembershipType[]>('/api/account/memberships');
        return response.data;
    } catch (error) {
        throw error;
    }
};