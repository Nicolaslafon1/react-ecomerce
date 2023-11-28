import React from "react";
import useCounter from "../Helpers/useCounter";

const ItemCounter = ({ onAdd }) => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="text-center">
      <div className="mb-3">
        <button
          className="btn btn-dark me-2"
          onClick={decrement}
        >
          -
        </button>
        <span className="fw-bold fs-4">{count}</span>
        <button
          className="btn btn-dark ms-2"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-outline-dark"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
