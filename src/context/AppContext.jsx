import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('lucky_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart', e);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('lucky_cart', JSON.stringify(cart));
  }, [cart]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        addToast(`Aumentada cantidad de ${product.name} en el carrito`);
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      addToast(`Añadido ${product.name} al carrito`);
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.product.id === productId);
    if (item) {
      addToast(`Eliminado ${item.product.name} del carrito`);
    }
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const openProductModal = (product) => {
    setActiveProduct(product);
    document.body.classList.add('modal-open');
  };

  const closeProductModal = () => {
    setActiveProduct(null);
    document.body.classList.remove('modal-open');
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        activeProduct,
        toasts,
        categoryFilter,
        setCategoryFilter,
        addToCart,
        removeFromCart,
        updateQty,
        openProductModal,
        closeProductModal,
        addToast,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
