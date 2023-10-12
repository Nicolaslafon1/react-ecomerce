
import React from 'react';

const ItemListContainer = ({ propGreeting }) => {
  return (
    <div className="item-list-container">
      <p className="message">{propGreeting}</p>
    </div> 
  );
};

export default ItemListContainer;