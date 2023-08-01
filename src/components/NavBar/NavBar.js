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
          <Image src={logo} roundedCircle />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to={`/category/alimento`}>
              Alimento
            </NavLink>

            <NavLink className="nav-link" to={`/category/juguete`}>
              Juguetes
            </NavLink>

            <NavLink className="nav-link" to={`/category/accesorio`}>
              Accesorios
            </NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
