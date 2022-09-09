import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoMA from '../../assets/logoMoldearte.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
import {CartContext} from '../../Context/CartContext';

function BasicNav() {

  const {items} = useContext(CartContext);
  
  return (
    <Navbar style={{backgroundColor: "#d368c5d3"}} variant='dark' expand="lg">
      <Container>
        <NavLink to={'/'}>
          <Navbar.Brand>
            <img src={LogoMA} className="d-inline-block align-top imagen" alt="MoldeArte logo"/>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to={'/'}>
              <Nav.Link href="#link">Inicio</Nav.Link>
            </NavLink>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <Link to={'/category/tazas'}>
                  <NavDropdown.Item href="#action/3.1">Tazas</NavDropdown.Item>
                </Link>
                <Link to={'/category/mates'}>
                  <NavDropdown.Item href="#action/3.2">Mates</NavDropdown.Item>
                </Link>
                <Link to={'/category/bowls'}>
                <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
                </Link>
            </NavDropdown>
            <NavLink to={'/'}>
              <Nav.Link href="#link">Diseños Personalizados</Nav.Link>
            </NavLink>
            <NavLink to={'/'}>
              <Nav.Link href="#link">Contactanos</Nav.Link>
            </NavLink>
            <Link to={'/cart'}>
            <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;