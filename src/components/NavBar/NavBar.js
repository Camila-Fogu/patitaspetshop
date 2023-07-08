import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Link to="">
          <Navbar.Brand href="#home">
            <Image src={logo} roundedCircle />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={`/category/alimento`}>Alimento</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={`/category/juguete`}>Juguetes</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={`/category/accesorio`}>Accesorios</NavLink>
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
