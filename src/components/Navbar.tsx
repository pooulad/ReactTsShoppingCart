import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBs className="bg-dark text-light mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="text-light" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-light" to="/shop" as={NavLink}>
            Shop
          </Nav.Link>
          <Nav.Link className="text-light" to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-light"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
            fontSize: "1.2rem",
          }}
        >
          <i className="bi bi-cart"></i>
          <div
            className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              fontSize: "1.2rem",
              top: 0,
              right: 0,
              transform: "translate(25%,-25%)",
            }}
          >
            2
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
