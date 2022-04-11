import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const addToCart = (item, cantidad) => {
        isInCart(item.id)
            ? sumarCantidad(item, cantidad)
            : setCart([...cart, { ...item, cantidad }]);
    };

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const removeItem = (id) => {
        let result = cart.filter((product) => product.id !== id);
        setCart([...result]);
        console.log('quitar', result)
    };

    const clear =()=> {
        setCart([]);
    };
    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
};