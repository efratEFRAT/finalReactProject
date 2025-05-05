import { Provider } from 'react-redux';
import { store } from '../redux/cart/store';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

export default function CartPage() {
  return (
    <div className="bg-dark  text-warning" dir="rtl">
    <Provider store={store}>
        <Cart />
    </Provider>
    </div>
  );
}
