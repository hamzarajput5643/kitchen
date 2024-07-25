import axiosInstance from "../../app/axiosInstance";
import { ProductOrder } from "../../app/types/Orders";

export const getUserOrders = async (id: number | null, page: number = 1, pageSize: number = 10): Promise<ProductOrder[]> => {
    try {
        const response = await axiosInstance.post<ProductOrder[]>('/api/orders/user-orders', {
            id: id,
            page: page,
            pageSize: pageSize
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};