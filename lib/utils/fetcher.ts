import axios from "axios";
import Cookies from "js-cookie";

const fetcher = async (url: string) => {
  const token = Cookies.get("auth_token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
  }
  const response = await axios.get(url);
  return response.data;
};

export { fetcher };
