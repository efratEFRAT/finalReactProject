import { ADD_TO_CART, REMOVE_FROM_CART,CALCULATE_TOTAL ,ADD_QUANTITY,REMOVE_QUANTITY} from './ActionsType';

export const addToCart = (product) => ({
  
    type: ADD_TO_CART,
    payload:product,
  
});

// // פעולה להסיר מוצר מהעגלה
export const removeFromCart= (product) => ({
  
    type:REMOVE_FROM_CART,
    payload:product.id,
  
});

export const addQuantity = (productId) => ({
    type: 'ADD_QUANTITY',
    payload: productId
  });
  
  export const removeQuantity = (productId) => ({
    type: 'REMOVE_QUANTITY',
    payload: productId
  });
  


export const calculateTotal = () => {
  return {
    type: CALCULATE_TOTAL,
  };
};