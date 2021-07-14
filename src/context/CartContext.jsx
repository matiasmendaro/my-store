import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();


export const CartComponentContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) { 
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

    const updateTotalQuantity = () => {
        const totalQuantity_acc = cart.reduce((acc, item) => {
            return acc + item.quantity; 
        }, 0);
        setTotalQuantity(totalQuantity_acc);
    }

    const updateTotalPrice = () => {
        const totalPrice_acc = cart.reduce((acc, item) => {
            return acc + (item.item.price * item.quantity); 
        }, 0);
        setTotalPrice(totalPrice_acc);
    }

    const isInCart = (id) => {
        return cart.some(itemCart => itemCart.item.id === id);
    }

    const stockInCart = (id) => {
        const itemFound = cart.find(itemCart => itemCart.item.id === id);
        if (itemFound)
            return itemFound.quantity;
        else
            return 0;
    }

    const removeItem = (id) => {
        var newCart = cart.reduce(function(acc, itemCart) {
            if (itemCart.item.id !== id){
              acc.push(itemCart);
            }
            return acc;
          }, []);

        setCart(newCart);
    }

    const clear = () => {
        setCart([]);
    }

    useEffect(() => {
        console.log(cart);
        updateTotalQuantity();
        console.log('CANTIDAD TOTAL => ' + totalQuantity.toString());
        updateTotalPrice();
        console.log('PRECIO TOTAL => ' + totalPrice.toString());
    });

    return(
        <CartContext.Provider value={{addItem, stockInCart, removeItem, cart, totalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}