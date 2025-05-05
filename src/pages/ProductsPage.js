import productsData from '../redux/productsData'; 
import ProductsList from '../components/ProductsList';
import { Provider } from 'react-redux';
import { store } from '../redux/cart/store'; 
export default function ProductsPage() {
    return (
        <div>
           
           <Provider store={store}>
                <ProductsList products={productsData} />
            </Provider>
        </div>
    );
}
