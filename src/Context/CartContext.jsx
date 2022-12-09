import { createContext } from "react";

const CartContext = createContext({
    product: [],
    setProduct: () => {}
})

export default CartContext;