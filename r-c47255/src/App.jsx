import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from 'react';
import NavBar from './componentes/Navbar/Navbar/NavBar';
import ItemListContainer from './componentes/Navbar/itemlistcontainer/itemlistcontainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer propGreeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;