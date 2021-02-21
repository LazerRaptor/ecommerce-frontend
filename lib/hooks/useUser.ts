import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { BASE_URL } from "../constants";


const useUser = () => {
    const url = `${BASE_URL}/api/auth/token/login`;
    const { data, error } = useSWR(url, fetcher);
    const response =  {
        token: data,
        isLoading: !error && !data,
        isError: error,
    };
    return response;
}

export { useUser }