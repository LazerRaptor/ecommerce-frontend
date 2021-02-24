import axios from "axios";
import { RESTError } from "./errors";


const fetcher = async (url: string) => {
    let response = await axios.get(url);
    if (response.status !== 200) {
        const error = new RESTError('An error occured while fetching the data.')
        error.info = response.statusText
        error.status = response.status
        throw error
    }
    return response.data;
} 

export { fetcher };