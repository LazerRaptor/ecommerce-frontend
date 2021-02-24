import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { URLPatterns } from "../api/cart";
import { ICart } from "../utils/interfaces"; 

const useCart = (
    key: 'cart' | 'content' | 'item',
    uuid?: string, // basket id
    itemID?: number, // item in the basket
    initialData?: ICart,
) => {
    let url 
    switch (key) {
        case 'cart':
            url = URLPatterns[key](uuid);
            if (!!itemID) console.warn("Incompatible arguments");
            break;

        case 'content':
            url = URLPatterns[key];
            if (!!itemID && !!uuid) console.warn("Incompitable arguments");
            break;
        
        case 'item':
            url = URLPatterns[key](itemID);
            if (!!uuid) console.warn("Incompitable arguments");
            break;
    
        default:
            url = URLPatterns.cart;
            console.warn("Wrong 'key' argument")
            break;
    }
    const { data, error } = useSWR(url, fetcher, { initialData });
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}

export { useCart };