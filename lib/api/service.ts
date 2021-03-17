import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../constants";
import { IProfile } from "../utils/interfaces";

export default class ApiService {
  static saveStripeInfo(data = {}) {
    
  };
}

const getUserProfile = async (id) => {
  let url = `${BASE_URL}/api/profile/${id}`
  const response = await axios.get(url);
  return response 
}

const saveUserProfile = async (data: IProfile) => {
  let url = `${BASE_URL}/api/profile/`;
  const id = Cookies.get("profile_id"); 

  // update profile instead if id is provided
  if (id !== undefined) {
    url += `${id}/`;
    const response = await axios.put(url, data);
    return response;
  }
  
  // create a new profile, save id as cookie
  const response = await axios.post(url, data);
  if (response.status === 201) {
    Cookies.set("profile_id", response.data.id);
  }
  return response;
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
  saveStripeResponse,
  saveUserProfile,
  getUserProfile
};
