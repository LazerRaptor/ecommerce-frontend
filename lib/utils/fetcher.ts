import axios from "axios";

const options = () => {
  if (typeof window === "undefined") return {};
  const token = window.localStorage.getItem("auth_token");
  return {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
};

const fetcher = async (url: string) => {
  let response = await axios.get(url, options());
  return response.data;
};

export { fetcher };
