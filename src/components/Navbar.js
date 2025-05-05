import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

export default function MyNavbar() {
  const baseStyle = {
    color: 'white',
    fontWeight: 300,
    fontSize: '1.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    textDecoration: 'none',
    position: 'relative',
  };

  const navbarStyle = {
    backgroundColor: 'black',
    boxShadow: '0 8px 20px rgba(255, 153, 0, 0.5)',
    height: '120px',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    height: '100%',
  };

  const links = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' },
    { to: '/cart', text: 'Cart' },
    { to: '/checkout', text: 'Checkout' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
    { to: '/recommendations', text: 'recommendations' },
  ];

  return (
    <>
      <style>{`
        @keyframes orangeWave {
          0%, 100% {
            text-shadow: none;
            color: white;
          }
          50% {
            text-shadow: 0 0 15px #ff9900;
            color: #ff9900;
          }
        }

        .nav-animate {
          animation: orangeWave 4s infinite;
        }

        .nav-animate:hover {
          color: #ff9900 !important;
          text-shadow: 0 0 10px #ff9900;
        }

        .nav-animate:nth-child(1) { animation-delay: 0s; }
        .nav-animate:nth-child(2) { animation-delay: 0.3s; }
        .nav-animate:nth-child(3) { animation-delay: 0.6s; }
        .nav-animate:nth-child(4) { animation-delay: 0.9s; }
        .nav-animate:nth-child(5) { animation-delay: 1.2s; }
        .nav-animate:nth-child(6) { animation-delay: 1.5s; }
        .nav-animate:nth-child(7) { animation-delay: 1.8s; }
      `}</style>

      <Navbar expand="lg" fixed="top" style={navbarStyle} className="w-100 py-0">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="TastyStore Logo" style={{ height: '120px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={navStyle}>
              {links.map(({ to, text }, index) => (
                <Nav.Link
                  as={Link}
                  to={to}
                  key={to}
                  className="nav-animate"
                  style={baseStyle}
                >
                  {text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
