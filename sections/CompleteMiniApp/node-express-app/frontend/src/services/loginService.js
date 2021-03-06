import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const BASE_URL = 'http://localhost:4000';

export function authenticate(email, password) {

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}

export function checkValidToken() {

    const config = {
        headers: {
            Authorization: `Bearer ${cookies.get('access_token')}`
        }
    };

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/check-valid-token`, {}, config)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}

export function refreshToken() {

    const config = {
        headers: {
            Authorization: `Bearer ${cookies.get('refresh_token')}`
        }
    };

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/refresh-token`, {}, config)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}

export function logout(email) {
    const config = {
        headers: {
            Authorization: `Bearer ${cookies.get('access_token')}`
        }
    };

    const result = new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/logout`, {email}, config)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    });

    return result;
}