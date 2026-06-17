import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">TIENDA</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/el-chef">EL CHEF</Link>
        </div>
        
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/"><img src="/IMG_1960(1).png" alt="Zampa Logo" style={{ height: '90px', objectFit: 'contain' }} /></Link>
          <span className="est" style={{ marginTop: '5px' }}>EST. 2021</span>
        </div>
        
        <div className="nav-links right-links">
          <Link to="/comunidad">COMUNIDAD</Link>
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
        <Link to="/" onClick={toggleMobileMenu}>TIENDA</Link>
        <Link to="/nosotros" onClick={toggleMobileMenu}>NOSOTROS</Link>
        <Link to="/el-chef" onClick={toggleMobileMenu}>EL CHEF</Link>
        <Link to="/comunidad" onClick={toggleMobileMenu}>COMUNIDAD</Link>
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
