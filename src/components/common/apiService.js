import axiosInstance from "./axiosCommonApi";


export const apiGet = (url, params) => {
    return axiosInstance.get(url, { params });
};

export const apiPost = (url, data) => {
    return axiosInstance.post(url, data);
};

// You can add more functions for other HTTP methods (PUT, DELETE, etc.) as needed
