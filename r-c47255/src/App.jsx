import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './componentes/Navbard/NavBar.jsx'




import 'bootstrap/dist/css/bootstrap.min.css';
import Itemdetailcontainer from './componentes/Itemdetailcontainer/Itemdetailcontainer.jsx';
import ItemListContainer from './componentes/itemlistcontainer/itemlistcontainer.jsx';
import { CartContextProvider } from './contexts/CartContext.jsx';
import CartContainer from './componentes/CartContainer/CartContainer.jsx';



function App() {
    
    return ( 
       
        <CartContextProvider>
            <Router>           
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Cbum store' /> } /> 
                <Route path='/category/:cid' element={<ItemListContainer greeting='Bienvenidos a Cbum store' /> } /> 
                <Route path='/detail/:pid' element={<Itemdetailcontainer /> } />
                <Route path="/cart" element={<CartContainer />} />
                
            </Routes>
        </Router>
        
        </CartContextProvider>
        
        
        
        
       
       
    )
}

export default App










