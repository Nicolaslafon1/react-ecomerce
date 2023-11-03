import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../Helpers/Mfetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    mFetch(Number(pid)).then((data) => {
      setProduct(data);
    });
  }, [pid]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Categoría: {product.category}</p>
          <h4 className="text-primary">Precio: ${product.price}</h4>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;