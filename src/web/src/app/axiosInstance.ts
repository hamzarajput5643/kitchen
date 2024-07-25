import axios from "axios";
import { store } from "@app/store/store";
import { refreshToken } from "@app/services/auth";  // Ensure this import is correct
import { updateToken, resetToken } from "@app/store/reducers/auth";

const BASE_URL = "https://localhost:1002";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const { accessToken } = store.getState().auth;

        if (accessToken && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const { refreshToken: refreshTokenValue, accessToken } = store.getState().auth;

            if (refreshTokenValue && accessToken) {
                try {
                    const response = await refreshToken({
                        accessToken,
                        refreshToken: refreshTokenValue,
                    });
                    if (response && response.isSucceed && response.data) {
                        store.dispatch(updateToken(response.data));
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
                        originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                        return axios(originalRequest);
                    } else {
                        store.dispatch(resetToken());
                    }
                } catch (refreshError) {
                    store.dispatch(resetToken());
                    throw refreshError;
                }
            } else {
                store.dispatch(resetToken());
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;