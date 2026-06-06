import React from 'react';
import { useApp } from '../context/AppContext';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQty, 
    removeFromCart, 
    cartSubtotal,
    addToast
  } = useApp();

  const handleCheckout = () => {
    addToast("¡Pedido simulado procesado con éxito! Gracias por tu compra.");
    setIsCartOpen(false);
  };

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 className="cart-title">YOUR CART</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>
        
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <p className="cart-empty-msg">Tu carrito está vacío</p>
          ) : (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-name">{product.name}</h4>
                    <span className="cart-item-price">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button className="qty-btn" onClick={() => updateQty(product.id, -1)}>-</button>
                      <span className="qty-val">{quantity}</span>
                      <button className="qty-btn" onClick={() => updateQty(product.id, 1)}>+</button>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(product.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>SUBTOTAL:</span>
              <span className="cart-subtotal-val">${cartSubtotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-secondary btn-checkout" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
