import axios from 'axios';

export const axiosInstance = axios.create({baseURL: 'http://localhost:3001/api/'});

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("authToken");
    config.headers.Authorization =  token;
    return config;
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, (error) => {
    if(error?.response?.status == 401){
        localStorage.removeItem('authToken');
        window.location = "http://localhost:3000/"
    }
     throw error;
});