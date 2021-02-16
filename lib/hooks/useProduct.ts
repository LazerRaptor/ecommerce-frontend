import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BASE_URL } from "../constants";

const useProduct = (field = "featured", value = true) => {
  let url = `${BASE_URL}/products/?${field}=${value}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useProduct };
