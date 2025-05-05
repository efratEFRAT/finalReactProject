import { combineReducers,createStore } from 'redux';
import cartReducer from './cartReducer'; // זהו ה-reducer שמטפל בעגלה

const rootReducer = combineReducers({
  cart: cartReducer,  
});
export const store =createStore(rootReducer);
export default store;
