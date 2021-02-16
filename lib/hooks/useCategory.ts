import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { URLPatterns } from "../api/categories";

export const useCategory = (key = "list") => {
  const url = URLPatterns[key];
  const { data, error } = useSWR(url, fetcher);
  const response = {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };

  return response;
};
