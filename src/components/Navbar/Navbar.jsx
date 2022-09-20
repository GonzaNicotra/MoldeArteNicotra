import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoMA from '../../assets/logoMoldearte.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';


function BasicNav() {
  
  return (
    <Navbar style={{backgroundColor: "#d368c5d3"}} variant='dark' expand="lg" className='nav'>
      <Container>
        <NavLink to={'/'}>
          <Navbar.Brand>
            <img src={LogoMA} className="d-inline-block align-top imagen" alt="MoldeArte logo"/>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to={'/'} className='detail'>
              <Nav.Link href="#link" active>Inicio</Nav.Link>
            </NavLink>
            <NavLink to={'/productos'} className='detail'>
              <Nav.Link href="#link" active>Productos</Nav.Link>
            </NavLink>
            <NavDropdown active title="Categorías" className='detail' id="basic-nav-dropdown">
                <Link className='detail' to={'/category/tazas'}>
                  <NavDropdown.Item href="#action/3.1">Tazas</NavDropdown.Item>
                </Link>
                <Link to={'/category/mates'} className='detail'>
                  <NavDropdown.Item href="#action/3.2">Mates</NavDropdown.Item>
                </Link>
                <Link to={'/category/bowls'} className='detail'>
                <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
                </Link>
            </NavDropdown>
            <NavLink to={'/personalizados'} className='detail'>
              <Nav.Link href="#link" active>Diseños Personalizados</Nav.Link>
            </NavLink>
            <NavLink to={'/cuidados'} className='detail'>
              <Nav.Link href="#link" active>Cuidados</Nav.Link>
            </NavLink>
            <NavLink to={'/'} className='detail'>
              <Nav.Link active href="#link">Contactanos</Nav.Link>
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