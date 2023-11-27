


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../CartWidget/CartIcon';
import CartContainer from '../CartContainer/CartContainer';

function NavBar() {
    
    return (
        <>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">CBumStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to="/">Inicio</NavLink>
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Buzos'>
                            Buzos
                        </NavLink>
                        
                        <NavLink className={({isActive})=> isActive ? 'btn btn-outline-primary' : 'btn'} to='/category/Jogger'>
                        Jogger
                        </NavLink>

<NavLink to="/cart" className="btn btn-outline-primary">
                <CartIcon /> 
              
              
            </NavLink>

                        
                    

        
                      
                        
            
        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>

    )
}

export default NavBar

