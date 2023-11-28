import React from 'react';
import { Link } from 'react-router-dom';

export const Itemlist = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="card w-25 m-2 bg-light text-dark" key={product.id}>
          <img src={product.imageUrl} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <p className="card-title h4 font-italic mb-2">{product.name}</p>
            <p className="card-text h6 mb-2">Categoria:{product.category}</p>
            <p className="card-text h6 mb-2">${product.price}</p>
          </div>
          <div className="card-footer">
            <Link to={`/detail/${product.id}`}>
              <button className="btn btn-outline-dark w-100">Detalles</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
