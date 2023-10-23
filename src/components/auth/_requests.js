import axios from 'axios'
import {LOGIN_URL, REGISTER_URL} from "../apiUrl";

// Server should return AuthModel
export function login(email, password) {
    return axios.post(LOGIN_URL, {
        email,
        password,
    })
}

// Server should return AuthModel
export function register(
    email,
    firstname,
    lastname,
    password,
    password_confirmation
) {
    return axios.post(REGISTER_URL, {
        email,
        first_name: firstname,
        last_name: lastname,
        password,
        password_confirmation,
    })
}
