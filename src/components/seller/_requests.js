import axios from 'axios'
import {ADD_PRODUCT_URL, CATEGORIES_URL, UPLOAD_PRODUCT_IMAGE_URL} from "../apiUrl";

export function fetchCategories() {
    return axios.get(CATEGORIES_URL)
}

export function addProduct(data) {
    return axios.post(ADD_PRODUCT_URL, data)
}

export function addUploadImage(id, data) {
    return axios.post(UPLOAD_PRODUCT_IMAGE_URL.replace("{id}", id), data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

