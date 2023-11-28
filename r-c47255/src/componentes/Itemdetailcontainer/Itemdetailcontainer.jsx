import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import CartContext from "../../contexts/CartContext";
import ItemDetail from "../itemdetail/itemdetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, 'products', pid);
        const docSnapshot = await getDoc(queryDoc);

        if (docSnapshot.exists()) {
          const data = { id: docSnapshot.id, ...docSnapshot.data() };
          setProduct(data);
          setLoading(false);
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchData();
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