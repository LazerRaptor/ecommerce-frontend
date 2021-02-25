import axios from "axios";
import { BASE_URL } from "../constants";

const URLPatterns = {
  login: () => `${BASE_URL}/api/auth/token/login/`,
  logout: () => `${BASE_URL}/api/auth/token/logout/`,
  register: () => `${BASE_URL}/auth/users/`,
};

const login = async (data) => {
  const url = URLPatterns.login();
  const response = await axios.post(url, data);
  if (response.status === 200) {
    try {
      window.localStorage.setItem(
        "auth_token",
        JSON.stringify(response.data.auth_token)
      );
    } catch (e) {
      console.log(e);
    }
  }
  return response;
};

const logout = async () => {
  const url = URLPatterns.logout();
  const response = await axios.post(url);
  if (response.status === 204) {
    try {
      window.localStorage.removeItem("auth_token");
    } catch (e) {
      console.log(e);
    }
  }
  return response;
};

const register = async (data) => {
  const url = URLPatterns.register();
  const response = await axios.post(url, data);
  return response;
};

export { login, logout, register };
