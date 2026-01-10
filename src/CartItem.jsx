import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // زيادة الكمية
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // نقصان الكمية
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // إزالة العنصر بالكامل
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // حساب المجموع الفرعي للعنصر
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  // حساب المجموع الإجمالي لكل العناصر في السلة
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(calculateTotalCost(item)), 0).toFixed(2);
  };

  // استمرار التسوق
  const handleContinueShoppingClick = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  // الدفع (مستقبلي)
  const handleCheckoutShopping = () => {
    alert('Checkout functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-img" />
                    {item.name}
                  </td>
                  <td>{item.cost}</td>
                  <td>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </td>
                  <td>${calculateTotalCost(item)}</td>
                  <td>
                    <button onClick={() => handleRemove(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h2>Total: ${calculateTotalAmount()}</h2>
            <button onClick={handleContinueShoppingClick}>Continue Shopping</button>
            <button onClick={handleCheckoutShopping}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
