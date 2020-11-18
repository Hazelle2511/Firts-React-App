import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <div className="Cart">
      <h1>I am cart</h1>
      <div className="Cart-items">
        {items.map((item) => (
          // <li>
          //   Name: {item.name}, Price: {item.price}
          // </li>
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      {/* <ul>
        {initialItems.map((item) => (
          // <li>
          //   Name: {item.name}, Price: {item.price}
          // </li>
          <CartItem {...item} />
        ))}
      </ul> */}
      <h2>Grand Total: ${grandTotal}</h2>
    </div>
  );
}

export default Cart;
