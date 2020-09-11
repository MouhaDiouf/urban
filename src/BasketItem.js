import React from 'react';
import './BasketItem.css';

function BasketItem({ item }) {
  console.log(item);
  const { title, rating, price, image } = item;
  return (
    <div className="basket">
      <div className="basket__info">
        <p>{title}</p>
        <div className="basket__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="basket__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Remove from cart</button>
    </div>
  );
}

export default BasketItem;
