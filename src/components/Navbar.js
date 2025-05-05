import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';  // שים כאן את נתיב התמונה שלך

export default function MyNavbar() {
  return (
    <Navbar bg="black" expand="lg" className="shadow-sm w-100 py-4"> {/* הוספתי padding למרווח יותר גדול */}
      <Container fluid> {/* fluid מאפשר למרוח את התפריט על כל רוחב הדף */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="TastyStore Logo" style={{ height: '60px' }} /> {/* לוגו יותר גדול */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#FFA500', fontSize: '1.2rem', fontWeight: 'bold', padding: '0 30px' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" style={{ color: '#FFA500', fontSize: '1.2rem', fontWeight: 'bold', padding: '0 30px' }}>Products</Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ color: '#FFA500', fontSize: '1.2rem', fontWeight: 'bold', padding: '0 30px' }}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/checkout" style={{ color: '#FFA500', fontSize: '1.2rem', fontWeight: 'bold', padding: '0 30px' }}>Checkout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
