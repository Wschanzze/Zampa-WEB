import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { cartCount, setIsCartOpen } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-links left-links">
          <NavLink to="/" end>TIENDA</NavLink>
          <NavLink to="/nosotros">NOSOTROS</NavLink>
          <NavLink to="/el-chef">EL CHEF</NavLink>
        </div>
        
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/"><img src="/IMG_1960(1).png" alt="Zampa Logo" className="navbar-logo" /></Link>
          <span className="est" style={{ marginTop: '5px' }}>EST. 2021</span>
        </div>
        
        <div className="nav-links right-links">
          <NavLink to="/b2b">B2B / MAYORISTAS</NavLink>
          <NavLink to="/comunidad">COMUNIDAD</NavLink>
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
        <Link to="/b2b" onClick={toggleMobileMenu}>B2B / MAYORISTAS</Link>
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
