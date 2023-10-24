// api.js

import axios from 'axios';
import {API_URL} from "../apiUrl";
import {setupAxios} from "../auth/AuthHelpers";

const axiosInstance = axios.create({
    baseURL: API_URL
});


setupAxios(axiosInstance);
export default axiosInstance;
