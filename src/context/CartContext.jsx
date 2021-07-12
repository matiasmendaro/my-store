import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();


export const CartComponentContext = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        console.log(item);

        const indexCart = isInCart(item.id);
        console.log(indexCart)

        if (indexCart >= 0) { 
            const newCart = cart.map(itemCart => {
                if (itemCart.item.id === item.id)
                    return {...itemCart, quantity : itemCart.quantity + quantity}
                else
                    return itemCart
            })
            setCart(newCart);
        }
        else {
            setCart([...cart, { item, quantity }]);
        }

    }

    const isInCart = (id) => {
        return cart.findIndex(itemCart => itemCart.item.id === id);
    }

    const stockInCart = (id) => {
        const itemFound = cart.find(itemCart => itemCart.item.id === id);
        if (itemFound)
            return itemFound.quantity;
        else
            return 0;
    }

    const removeItem = (itemId) => {
    }

    const clear = () => {
        setCart([]);
    }

    useEffect(() => {
        console.log(cart);
    });

    return(
        <CartContext.Provider value={{addItem, stockInCart}}>
            {children}
        </CartContext.Provider>
    )

}