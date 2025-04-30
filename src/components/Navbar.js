import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">🍽️ TastyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* קישור לדף הבית */}
            <Nav.Link as={Link} to="/products">Products</Nav.Link> {/* קישור לדף המוצרים */}
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link> {/* קישור לעגלת קניות */}
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link> {/* קישור לדף תשלום */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}