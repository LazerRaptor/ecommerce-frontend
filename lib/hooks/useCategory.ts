import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BASE_URL } from "../utils/constants";
import { ICategory } from "../utils/interfaces";

type A = {
  categories: ICategory;
  isLoading: boolean;
  isError: boolean;
};

type B = {
  categories: ICategory[];
  isLoading: boolean;
  isError: boolean;
};

export const useCategory = (many = true, ...restArgs) => {
  let substitution;
  let url;
  let path;

  if (many) {
    substitution = "categories";
    url = `${BASE_URL}/categories/root`;
  } else {
    substitution = "category";
    path = restArgs.join("/");
    url = `${BASE_URL}/categories/${path}`;
  }
  const { data, error } = useSWR(url, fetcher);
  const rv = {
    [substitution]: data, // using type assertion to silence this. Well...
    isLoading: !error && !data,
    isError: error,
  } as A | B;

  return rv;
};
