import axios from "axios";

const fetcher = async (url: string) => {
    let response = await axios.get(url);
    return response.data;
} 

export { fetcher };