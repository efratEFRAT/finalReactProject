import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer'; // ודא שקיים רכיב כזה
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import RecommendationsPage from './pages/RecommendationsPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* עמוד גמיש בגובה מלא */}
      <Router>
      <ScrollToTop />
        <MyNavbar />
        <main className="flex-grow-1" style={{ paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} /> 
            <Route path="/recommendations" element={<RecommendationsPage/>} />
            
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
