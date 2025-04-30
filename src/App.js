import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    <Router>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}
export default App;
