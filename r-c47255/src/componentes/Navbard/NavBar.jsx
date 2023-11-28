import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import CartIcon from '../CartWidget/CartIcon';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">CBumStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Inicio
              </NavLink>
              <NavLink className="nav-link" to='/category/Buzos' activeClassName="active">
                Buzos
              </NavLink>
              <NavLink className="nav-link" to='/category/Jogger' activeClassName="active">
                Jogger
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/cart" className="nav-link">
                <CartIcon />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

