import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import CartContext from "../../contexts/CartContext";

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  const onAdd = (cant) => {
    console.log('Cantidad seleccionada:', cant);
    agregarAlCarrito({ ...product, cant });
    setIsCount(false);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Categoría: {product.category}</p>
          <h4 className="text-primary">Precio: ${product.price}</h4>
          <p>{product.description}</p>

          {isCount ? (
            <ItemCounter initial={1} stock={5} onAdd={onAdd} />
          ) : (
            <div className="d-flex">
              <Link className="btn btn-outline-dark me-2" to="/">
                Ir al home
              </Link>
              <Link className="btn btn-outline-dark" to="/cart">
                Ir al carrito
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;




