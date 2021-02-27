import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { ICategory } from "../utils/interfaces";

const useCategory = (url, initialData?: ICategory) => {
  const { data, error } = useSWR(url, fetcher, { initialData });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useCategory };
