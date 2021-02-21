import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { URLPatterns } from "../api/product";
import { IProduct } from "../utils/interfaces"; 

/** 
 * [...array] is used to silence TS complaint 
 * (Object.keys() is not recognized as array type)
*/ 
const keys = [...Object.keys(URLPatterns)] as const
type Key = typeof keys[number]

const useProduct = (
  key: Key, 
  param?: string,
  initialData?: IProduct 
) => {
  let url = URLPatterns[key](param);
  const { data, error } = useSWR(url, fetcher, { initialData });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useProduct };