import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCarrito = (proudct) => {

    setCartList([
        ...cartList,
        proudct
    ])
  }
const eliminarProducto = (productId) => {
    const updatedCart = cartList.filter((item) => item.id !== productId);
    setCartList(updatedCart);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;