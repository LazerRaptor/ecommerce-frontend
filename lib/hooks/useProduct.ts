import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { URLPatterns } from "../api/category";
import { IProduct } from "../utils/interfaces";

function useProduct(param: string, initialData?: IProduct) {
  let url = URLPatterns["detail"](param);
  const { data, error } = useSWR(url, fetcher, { initialData });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useProduct };
