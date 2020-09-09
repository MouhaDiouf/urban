import React from 'react';
import './Product.css';
import lean from './lean_startup.jpg';

function Product({}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <div className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </div>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src={lean} alt="lean startup" />
    </div>
  );
}

export default Product;
