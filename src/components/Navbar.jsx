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
      {/* Temporary Print PDF Tool */}
      <div className="print-pdf-banner">
        <span>MODO DE ANÁLISIS: ¿Querés guardar o imprimir esta página en papel?</span>
        <button className="print-pdf-btn" onClick={() => window.print()}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          DESCARGAR PDF / IMPRIMIR
        </button>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Mobile Hamburger on the Left */}
        <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Left Links */}
        <div className="nav-links left-links">
          <NavLink to="/nuestra-historia">NUESTRA HISTORIA</NavLink>
          <NavLink to="/productos">PRODUCTOS</NavLink>
          <NavLink to="/elaboracion">ELABORACIÓN</NavLink>
        </div>
        
        {/* Logo in the center */}
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/"><img src="/IMG_1960(1).png" alt="Zampa Logo" className="navbar-logo" /></Link>
        </div>
        
        {/* Desktop Right Links */}
        <div className="nav-links right-links">
          <NavLink to="/comunidad">COMUNIDAD</NavLink>
          <NavLink to="/revendedores">REVENDEDORES</NavLink>
          <button 
            className="nav-cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            CARRITO {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>

        {/* Mobile Cart Button on the Right */}
        <button 
          className="mobile-cart-btn" 
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/nuestra-historia" onClick={toggleMobileMenu}>NUESTRA HISTORIA</Link>
        <Link to="/productos" onClick={toggleMobileMenu}>PRODUCTOS</Link>
        <Link to="/elaboracion" onClick={toggleMobileMenu}>ELABORACIÓN</Link>
        <Link to="/comunidad" onClick={toggleMobileMenu}>COMUNIDAD</Link>
        <Link to="/revendedores" onClick={toggleMobileMenu}>REVENDEDORES</Link>
        
        <button 
          className="nav-cart-btn"
          onClick={() => {
            toggleMobileMenu();
            setIsCartOpen(true);
          }}
          style={{ width: '100%', justifyContent: 'center', padding: '1rem 0' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          CARRITO {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </>
  );
};

export default Navbar;
