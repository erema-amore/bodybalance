import React from 'react';

function MyOrderItem({ cart }) {
  return (
    <div>
      <h3>Your order is completed</h3>
      <ul>
        {cart.products.map(product => (
          <li key={product.productItem.id}>
            Product Name: {product.productItem.name}, Price: ${product.productItem.price}
          </li>
        ))}
        <h3>You paid {cart.totalCost}</h3>
      </ul>
    </div>
  );
}

export default MyOrderItem;