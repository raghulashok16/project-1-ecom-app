import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    // if found increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    // return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}
const removeCartItem = (cartItems, productToReduce) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToReduce.id);
    // if found decrement quantity
    if (existingCartItem.length === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToReduce.id)
    }
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToReduce.id)
    }
    // return new array with modified cartItems
    return cartItems.map((cartItem) => cartItem.id === productToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}



export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    decreaseItemfromCart: () => { },
    deleteItemfromCart: () => { },
    total: 0,
    cartQuantity: 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const decreaseItemfromCart = (productToReduce) => {
        setCartItems(removeCartItem(cartItems, productToReduce));
    }
    const deleteItemfromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }
    const deleteCartItem = (cartItems, productToDelete) => {

        return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
    }
    useEffect(() => {
        let temp = 0;
        cartItems.map(({ quantity }) => {
            temp = ((temp + quantity))
            setCartQuantity(temp);
        })
    }, [cartItems])

    useEffect(() => {
        let temp = 0;
        cartItems.map(({ price, quantity }) => {
            temp = (temp + (price * quantity))
            setTotal(temp);
        })
    }, [cartItems, cartQuantity])

    const value = { cartItems, addItemToCart, total, cartQuantity, decreaseItemfromCart, deleteItemfromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

