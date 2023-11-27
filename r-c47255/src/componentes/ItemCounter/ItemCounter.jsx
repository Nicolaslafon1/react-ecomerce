import React from "react";
import useCounter from "../Helpers/useCounter";

const ItemCounter = ({ onAdd }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCounter;