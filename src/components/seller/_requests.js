import axios from 'axios'
import {CATEGORIES_URL} from "../apiUrl";

export function fetchCategories() {
    return axios.get(CATEGORIES_URL)
}

