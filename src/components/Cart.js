import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  addQuantity,
  removeQuantity,
  calculateTotal
} from '../redux/cart/Actions';
import './Cart.css';
import { useNavigate } from 'react-router-dom'; 

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  useEffect(() => {
    dispatch(calculateTotal());
  }, [items, dispatch]);

  return (
    <div className="cart-container" dir="rtl">
      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>תמונה</th>
            <th>מנה</th>
            <th>מחיר</th>
            <th>כמות</th>
            <th>סה"כ לתשלום</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="cart-row">
              <td>{index + 1}.</td>
              <td><img src={item.image} alt={item.name} className="thumb" /></td>
              <td>{item.name}</td>
              <td>{item.price} ₪</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(removeQuantity(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(addQuantity(item.id))}>+</button>
                </div>
              </td>
              <td>{item.price * item.quantity} ₪</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                 x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary-section">
        <p>סה"כ: {total} ₪</p>
        <p>דמי משלוח: 30 ₪</p>
        <p>סה"כ מחיר ההזמנה: {total} ₪</p>
        <button className="checkout-button" onClick={() => navigate('/checkout')}>
          לתשלום
        </button>
      </div>
    </div>
  );
};

export default Cart;
