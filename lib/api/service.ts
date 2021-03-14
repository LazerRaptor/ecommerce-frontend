import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../constants";


export default class ApiService {
  static saveStripeInfo(data = {}) {
    
  };
}

const saveStripeResponse = async (data) => {
  const url = `${BASE_URL}/api/checkout/customer/`;
  const response = await axios.post(url, data);
  return response;
};

const login = async (data: { email: string, password: string }) => {
  const url = `${BASE_URL}/api/auth/token/login/`;
  const response: AxiosResponse<{ auth_token: string }> = await axios.post(url, data);
  if (response.status === 200) {
    Cookies.set("auth_token", response.data.auth_token);
  }
  return response;
};

const logout = async () => {
  const url = `${BASE_URL}/api/auth/token/logout/`;
  const response = await axios.post(url);
  if (response.status === 204) {
    Cookies.remove("auth_token");
  }
  return response;
};

const register = async (data) => {
  const url = `${BASE_URL}/auth/users/`;
  const response = await axios.post(url, data);
  return response;
};

export { 
  login, 
  logout, 
  register, 
  saveStripeResponse 
};
