import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/Actions';
import './products.css';

export default function ProductsList({ products }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [zoomProduct, setZoomProduct] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setMessage('המוצר נוסף לעגלה');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <>
      <div className="products-container">
        {message && <div className="simple-toast">{message}</div>}

        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="zoomable-image"
              onClick={() => setZoomProduct(product)}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price} ₪</p>
            <div className="product-buttons">
              <button onClick={() => handleAddToCart(product)}>הוסף לעגלה</button>
            </div>
          </div>
        ))}
      </div>

      {/* תצוגת תמונה מוגדלת */}
      {zoomProduct && (
        <div className="zoom-overlay" onClick={() => setZoomProduct(null)}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setZoomProduct(null)}
            >
              x
            </button>
            <img src={zoomProduct.image} alt="zoomed" className="zoomed-image" />
            <h2>{zoomProduct.name}</h2>
            <p>{zoomProduct.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
