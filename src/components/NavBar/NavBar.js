import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./assets/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} roundedCircle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Alimento</Nav.Link>
            <Nav.Link href="#link">Juguetes</Nav.Link>
            <Nav.Link href="#link">Muebles</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
