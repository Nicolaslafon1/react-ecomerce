import React from 'react'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';


export const CartContainer = () => {
  const { cartList, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  const handleEliminarProducto = (productId) => {
    eliminarProducto(productId);
  };

  const calcularPrecioTotal = () => {
    return cartList.reduce((total, product) => total + product.price * product.cant, 0);
  };

  return (
    <div>
      
      
      {cartList.length === 0 ? (
        <p>Su carrito está vacío.</p>
      ) : (
        <>
          {cartList.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} alt="image" />
              -<b>producto</b> : {product.name}
              -<b>precio</b> : {product.price}
              -<b>Cantidad</b> : {product.cant}
              <button className='btn btn-danger' onClick={() => handleEliminarProducto(product.id)}>
                X
              </button>
            </div>
          ))}

          Precio Total {calcularPrecioTotal()} 
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button>Terminar Compra</button>
        </>
      )}
    </div>
  );
};

export default CartContainer;