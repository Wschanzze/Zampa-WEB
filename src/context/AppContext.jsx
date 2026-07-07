import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const openProductModal = (product) => {
    setActiveProduct(product);
    document.body.classList.add('modal-open');
  };

  const closeProductModal = () => {
    setActiveProduct(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <AppContext.Provider
      value={{
        activeProduct,
        categoryFilter,
        setCategoryFilter,
        openProductModal,
        closeProductModal,
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
