import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoMA from '../../assets/logoMoldearte.png';


function BasicNav() {
  return (
    <Navbar style={{backgroundColor: "#d368c5d3"}} expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img
              src={LogoMA}
              width="160"
              height="56"
              className="d-inline-block align-top"
              alt="MoldeArte logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#link">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tazas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bowls</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Diseños Personalizados</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;