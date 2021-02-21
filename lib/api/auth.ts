import axios from "axios";
import { BASE_URL } from "../constants";


const login = async (data) => {
    const url = `${BASE_URL}/api/auth/token/login/`;    
    const response = await axios.post(url, data);
    if (response.status === 200) 
        window.localStorage.setItem('token', response.data.auth_token);
    return response
};

const logout = async () => {
    const url = `${BASE_URL}/api/auth/token/logout/`;
    const response = await axios.post(url);
    if (response.status === 204) 
        window.localStorage.removeItem('token');
    return response
}

const register = async (data) => {
    const url = `${BASE_URL}/auth/users/`;
    const response = await axios.post(url, data);
    return response
}

export { login, logout, register }