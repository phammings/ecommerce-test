import { useHistory } from "react-router-dom";
import { CART } from "../constants/routeConstants";

export const useCart = (perfumeId) => {
    const history = useHistory();

    const addToCart = () => {
        let data = localStorage.getItem("perfumes");
        let cart = data ? new Map(JSON.parse(data)) : new Map();

        if (cart.has(perfumeId)) {
            cart.set(perfumeId, cart.get(perfumeId) + 1);
        } else {
            cart.set(perfumeId, 1);
        }
        localStorage.setItem("perfumes", JSON.stringify(Array.from(cart.entries())));
        history.push(CART);
    };

    return { addToCart };
};

