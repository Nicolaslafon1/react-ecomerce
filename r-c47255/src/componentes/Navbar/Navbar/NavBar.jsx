
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Cbum Store</div>
      <ul className="nav-links">
        <li><a href="#">Suplementos</a></li>
        <li><a href="#">Ropa</a></li>
        <li><a href="#">Asesorías</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;