import React, { useState } from 'react'
import CartContext from '../../contexts/CartContext'
import { useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter';
import { getFirestore, collection,addDoc } from 'firebase/firestore';

export const CartContainer = () => {
  const [isId, setIsId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [repeatEmail, setRepeatEmail] = useState('');

  const { cartList, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  const handleEliminarProducto = (productId) => {
    eliminarProducto(productId);
  };

  const calcularPrecioTotal = () => {
    return cartList.reduce((total, product) => total + product.price * product.cant, 0);
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleRepeatEmailChange = (evt) => {
    setRepeatEmail(evt.target.value);
  };

  const handleOrders = (evt) => {
    evt.preventDefault();

    
    if (formData.email !== repeatEmail) {
      alert('Los campos de correo electrónico no coinciden');
      return;
    }

    const order = {};
    order.buyer = formData;
    order.items = cartList.map(({ id, price, cant, name }) => ({
      id: id,
      price: price,
      name: name,
      cant: cant,
    }));
    order.total = calcularPrecioTotal();

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');

    addDoc(queryCollection, order)
      .then(({ id }) => setIsId(id))
      .catch((err) => console.log(err));
  };


 return (
    <div>
      {isId !== '' && (
  <h2 className="text-center mt-4 mb-4 text-danger display-4">
    El ID de la compra es {isId}
  </h2>
)}

      
      {cartList.length === 0 ? (
        <p className="alert alert-warning">SU carrito está vacío.</p>

      ) : (
        <>
          {cartList.map((product) => (
  <div key={product.id} className="card mb-3" style={{ maxWidth: '18rem' }}>
    <img src={product.imageUrl} className="card-img-top" alt="Product" />
    <div className="card-body">
      <h5 className="card-title"><b>Producto:</b> {product.name}</h5>
      <p className="card-text"><b>Precio:</b> {product.price}</p>
      <p className="card-text"><b>Cantidad:</b> {product.cant}</p>
      <button className='btn btn-danger' onClick={() => handleEliminarProducto(product.id)}>
        X
      </button>
    </div>
  </div>
))}

<div className="card text-white bg-dark mb-3 p-4">
  <h5 className="card-title">Precio Total</h5>
  <p className="card-text">{calcularPrecioTotal()}</p>
</div>
          
          
          <button className="btn btn-danger btn-lg" onClick={vaciarCarrito}>
  Vaciar Carrito
</button>

          
          
          
          <form onSubmit={handleOrders} className="bg-light p-4">
  <div className="mb-3">
    <label className="form-label">Ingresa Tu Nombre</label>
    <input
      type="text"
      name="name"
      className="form-control"
      required
      onChange={handleOnChange}
      value={formData.name}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Ingrese su Numero</label>
    <input
      type="text"
      name="phone"
      className="form-control"
      required
      onChange={handleOnChange}
      value={formData.phone}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Ingrese su Email</label>
    <input
      type="text"
      name="email"
      className="form-control"
      required
      onChange={handleOnChange}
      value={formData.email}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Repite tu correo electrónico</label>
    <input
      type="text"
      name="repeatEmail"
      className="form-control"
      required
      onChange={handleRepeatEmailChange}
      value={repeatEmail}
    />
  </div>
  <button type="submit" className="btn btn-dark">Terminar compra</button>
</form>

        </>
      )}
    </div>
  );
};

export default CartContainer;