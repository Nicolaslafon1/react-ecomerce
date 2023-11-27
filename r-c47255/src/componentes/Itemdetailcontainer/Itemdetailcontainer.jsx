import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mFetch } from "../Helpers/Mfetch";
import Intercambiabilidad from "../Intercambiabilidad";
import ItemCounter from "../ItemCounter/ItemCounter";
import CartContext from "../../contexts/CartContext";
import ItemDetail from "../itemdetail/itemdetail"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pid } = useParams();

 

  useEffect(() => {
    setLoading(true);
    mFetch(Number(pid))
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pid]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;







  