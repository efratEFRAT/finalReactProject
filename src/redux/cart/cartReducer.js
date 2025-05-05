import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    ADD_QUANTITY, 
    REMOVE_QUANTITY, 
    CALCULATE_TOTAL 
  } from './ActionsType';
  
  const initialState = {
    items: [], // המוצרים בעגלה
    total: 0, // המחיר הכולל של העגלה
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          // אם המוצר כבר בעגלה, נוסיף 1 לכמות
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return { ...state, items: updatedItems };
        } else {
          // אם המוצר חדש, נוסיף אותו לעגלה עם כמות 1
          return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        }
  
      case ADD_QUANTITY:
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
      case REMOVE_QUANTITY:
        return {
          ...state,
          items: state.items
            .map(item =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter(item => item.quantity > 0), // אם כמות ירדה ל־0, מסיר מהמוצרים
        };
  
      case REMOVE_FROM_CART:
        const filteredItems = state.items.filter(item => item.id !== action.payload);
        return { ...state, items: filteredItems };
  
      case CALCULATE_TOTAL:
        const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return { ...state, total };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  