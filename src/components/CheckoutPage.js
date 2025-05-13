import React, { useState } from 'react';
import './CheckoutPage.css'; // ודא שהשם תואם לשם הקובץ

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'credit',
  });

  const cartItems = [
    { id: 1, name: 'מגש גבינות מפנק', quantity: 1, price: 120 },
    { id: 2, name: 'מגש סלטים', quantity: 2, price: 80 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ההזמנה נשלחה! תודה שקנית אצלנו :)');
    console.log('Order Data:', { formData, cartItems });
  };

  return (
    <div className="checkout-section">
      <div className="checkout-container">
        <h2 className="checkout-title"> תשלום</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">שם מלא</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">טלפון</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">כתובת למשלוח</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>שיטת משלוח</label>
            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange}>
              <option value="delivery">משלוח</option>
              <option value="pickup">איסוף עצמי</option>
            </select>
          </div>

          <div className="form-group">
            <label>אמצעי תשלום</label>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="credit">כרטיס אשראי</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="order-summary">
            <h3>סיכום ההזמנה</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <span>{item.name} x{item.quantity}</span>
                <span>{item.price * item.quantity} ₪</span>
              </div>
            ))}
            <div className="total">
              <span>סה״כ:</span>
              <span>{total} ₪</span>
            </div>
          </div>

          <button type="submit" className="checkout-btn">אשר הזמנה</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
