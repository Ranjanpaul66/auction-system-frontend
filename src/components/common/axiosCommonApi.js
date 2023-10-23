// api.js

import axios from 'axios';
import {API_URL} from "../auth/_requests";

const axiosInstance = axios.create({
    baseURL: API_URL, // Replace with your API base URL
});

// You can set default headers or interceptors here if needed

export default axiosInstance;
