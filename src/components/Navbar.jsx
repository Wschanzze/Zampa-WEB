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
          <a href="#shop">SHOP</a>
          <a href="#about">ABOUT US</a>
          <a href="#roping">SHOP ROPING</a>
        </div>
        
        <div className="logo-container">
          <h1 className="logo">LUCKY <span class="u-motif">U</span> STRIKES</h1>
          <span className="est">EST. 1989</span>
        </div>
        
        <div className="nav-links right-links">
          <a href="#ranching">SHOP RANCHING</a>
          <a href="#apparel">APPAREL</a>
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
        <a href="#shop" onClick={toggleMobileMenu}>SHOP</a>
        <a href="#about" onClick={toggleMobileMenu}>ABOUT US</a>
        <a href="#roping" onClick={toggleMobileMenu}>SHOP ROPING</a>
        <a href="#ranching" onClick={toggleMobileMenu}>SHOP RANCHING</a>
        <a href="#apparel" onClick={toggleMobileMenu}>APPAREL</a>
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
