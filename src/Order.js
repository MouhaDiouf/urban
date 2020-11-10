import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order?.data.created).format('MMMM DD YYYY, h:ma')}</p>
      <p className="order__id">
        <small>{order?.id}</small>
      </p>
      {order?.data.basket.map((item) => (
        <CheckoutProduct item={item} />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amout / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
