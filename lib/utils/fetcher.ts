import axios from "axios";

const fetcher = async (url: string) => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('auth_token');
    axios.defaults.headers.common["Authorization"] = token; 
  }
  let response = await axios.get(url);
  return response.data;
};

export { fetcher };
