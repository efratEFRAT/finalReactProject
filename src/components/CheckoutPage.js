import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from '../redux/cart/Actions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items: cartItems, total } = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ההזמנה נשלחה! תודה שקנית אצלנו :)');
    console.log('Order Data:', { formData, cartItems, total });
  };

  const printInvoice = () => {
    const input = document.getElementById('invoice');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div className="checkout-section">
      <div className="checkout-container">
        <h2 className="checkout-title">תשלום</h2>
        <form onSubmit={handleSubmit}>
          {/* פרטי אישיים */}
          <div className="form-group">
            <label>שם מלא</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>טלפון</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>אימייל</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>כתובת למשלוח</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* משלוח ותשלום */}
          <div className="form-group">
            <label>שיטת משלוח</label>
            <select
              name="deliveryMethod"
              value={formData.deliveryMethod}
              onChange={handleChange}
            >
              <option value="delivery">משלוח</option>
              <option value="pickup">איסוף עצמי</option>
            </select>
          </div>
          <div className="form-group">
            <label>אמצעי תשלום</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="credit">כרטיס אשראי</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {/* פרטי כרטיס אשראי */}
          {formData.paymentMethod === 'credit' && (
            <>
              <div className="form-group">
                <label>מספר כרטיס</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>תוקף</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* סיכום ההזמנה */}
          <div id="invoice" className="order-summary">
            <h3>סיכום ההזמנה</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{item.price * item.quantity} ₪</span>
              </div>
            ))}
            <div className="total">
              <span>סה״כ:</span>
              <span>{total} ₪</span>
            </div>
          </div>

          <button type="submit" className="checkout-btn">אשר הזמנה</button>
          <button type="button" onClick={printInvoice} className="checkout-btn secondary">
            הדפס חשבונית / הורד PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
