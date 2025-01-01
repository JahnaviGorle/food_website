import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);
const CART_KEY = 'cart';
const EMPTY_CART = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export default function CartProvider({ children }) {
  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
  };

  const [cartItems, setCartItems] = useState(getCartFromLocalStorage().items);
  const [totalPrice, setTotalPrice] = useState(getCartFromLocalStorage().totalPrice);
  const [totalCount, setTotalCount] = useState(getCartFromLocalStorage().totalCount);

  useEffect(() => {
    const total_price = cartItems.reduce((sum, item) => sum + item.price, 0);
    const total_count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    setTotalPrice(total_price);
    setTotalCount(total_count);

    localStorage.setItem(
      CART_KEY,
      JSON.stringify({ items: cartItems, totalPrice: total_price, totalCount: total_count })
    );
  }, [cartItems]);

  const removeFromCart = (foodId) => {
    const filteredCartItems = cartItems.filter((item) => item.food.id !== foodId);
    setCartItems(filteredCartItems);
  };

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem;
    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: food.price * newQuantity,
    };

    setCartItems(
      cartItems.map((item) => (item.food.id === food.id ? changedCartItem : item))
    );
  };

  const addToCart = (food) => {
    const cartItem = cartItems.find((item) => item.food.id === food.id);
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { food, quantity: 1, price: food.price }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        changeQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
