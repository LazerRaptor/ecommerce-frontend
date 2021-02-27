import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BASE_URL } from "../constants";
import { IProduct } from "../utils/interfaces";

function useProduct(slug: string, initialData?: IProduct) {
  let url = `${BASE_URL}/api/products/${slug}.json`;
  const { data, error } = useSWR(url, fetcher, { initialData });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useProduct };
