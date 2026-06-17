import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-links left-links">
          <a href="#shop">TIENDA</a>
          <a href="#about">HISTORIA</a>
        </div>
        
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="#"><img src="/IMG_1960(1).png" alt="Zampa Logo" style={{ height: '90px', objectFit: 'contain' }} /></a>
          <span className="est" style={{ marginTop: '5px' }}>EST. 2021</span>
        </div>
        
        <div className="nav-links right-links">
          <a href="#new-arrivals">QUESOS</a>
          <button 
            className="nav-cart-btn" 
            onClick={() => setIsCartOpen(true)}
          >
            CART {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>

        <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#shop" onClick={toggleMobileMenu}>TIENDA</a>
        <a href="#about" onClick={toggleMobileMenu}>HISTORIA</a>
        <a href="#new-arrivals" onClick={toggleMobileMenu}>QUESOS</a>
        <button 
          className="nav-cart-btn"
          onClick={() => {
            toggleMobileMenu();
            setIsCartOpen(true);
          }}
        >
          CART {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </>
  );
};

export default Navbar;
