import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs className="bg-dark text-light mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/shop" as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
