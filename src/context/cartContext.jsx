import React, {useState, useContext} from 'react';
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);


    // AGREGAR AL CARRITO //
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart (cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart ([...cart, { ...item, quantity }]);
        }
    }

    // PRECIO TOTAL CARRITO //
    const totalPrice = () => { 
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    // CANTIDAD DE PRODUCTOS EN CARRITO //
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    // BORRAR CARRITO //
    const clearCart = () => setCart ([]);

    // BUSCAR SI PRODUCTO ESTÁ EN EL CARRITO //
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;
    
    // BORRAR PRODUCTO DEL CARRITO //
    const removeProduct = (id) => setCart (cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;