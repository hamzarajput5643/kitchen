import axiosInstance from "@app/app/axiosInstance";
import { DashboardNavData } from "@app/app/interfaces/NavData";
import { iAppResponse } from "@app/app/interfaces/Response";

export const fetchDashboardNavApi = async (): Promise<iAppResponse<DashboardNavData>> => {
    const response = await axiosInstance.get<iAppResponse<DashboardNavData>>('/api/user/dashboard');
    return response.data;
};
