import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const ShowCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleDeleteItem = async(itemId) => {
    if (!userId) {
      alert('Please log in to view your cart.');
      navigate('/login');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:5500/delete/${itemId}`);
      fetchCartItems();
      window.location.reload();
    } catch(error) {
      console.error('Error fetching cart items:', error);
    }
  }

  const fetchCartItems = async () => {
    if (!userId) {
      alert('Please log in to view your cart.');
      navigate('/login');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5500/cart/${userId}`);
      setCartItems(response.data);

      // Calculate and set total price
      const total = response.data.reduce((sum, item) => sum + item.qty * item.price, 0);
      setTotalPrice(total.toFixed(2));
    } catch(error) {
      console.error('Error fetching cart items:', error);
    }
  };
  
  // Retrieve userId from session storage or context
  const userId = sessionStorage.getItem('userId');
  
  useEffect(() => {
   

    fetchCartItems();
  }, [userId, navigate]);

  const handleConfirmOrder = async () => {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      alert('Please log in to confirm your order.');
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5500/order', { userId });
      navigate('/confirm-order');
    } catch(error) {
      console.error('Error confirming order:', error);
      // Handle error, show message to the user
    }
  };

  return (
    <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <>
            <div key={item.itemId} className="cart-item">
              <img src={`/assets/${item.photo}`} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>£{item.price} x {item.qty}</p>
              </div>
            </div>
            <button className='btn btn-primary' onClick={() => handleDeleteItem(item.itemId)}>Remove Item</button>
            </>
          ))}
          <div className="total-price">
            <h3>Total £{totalPrice}</h3>
          </div>
          <button className='btn btn-primary' onClick={() => handleConfirmOrder()}>Confirm Order</button>
        </>
      )}
    </div>
        <div className='col-sm-4'></div>
    </div>
    
  );
};

export default ShowCart;
