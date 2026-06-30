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
          <NavLink to="/" end>INICIO</NavLink>
          <NavLink to="/productos">PRODUCTOS</NavLink>
          <NavLink to="/nuestra-historia">NUESTRA HISTORIA</NavLink>
        </div>
        
        <div className="logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link to="/"><img src="/IMG_1960(1).png" alt="Zampa Logo" className="navbar-logo" /></Link>
        </div>
        
        <div className="nav-links right-links">
          <NavLink to="/elaboracion">ELABORACIÓN</NavLink>
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

          <NavLink to="/contacto" className="nav-contact-btn-link" style={{ padding: 0 }}>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              CONTACTO
            </button>
          </NavLink>
        </div>

        <div className="mobile-controls">
          <button 
            className="nav-cart-btn mobile-cart-btn" 
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

          <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMobileMenu}>INICIO</Link>
        <Link to="/productos" onClick={toggleMobileMenu}>PRODUCTOS</Link>
        <Link to="/nuestra-historia" onClick={toggleMobileMenu}>NUESTRA HISTORIA</Link>
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

        <Link to="/contacto" onClick={toggleMobileMenu} style={{ padding: '1rem 0' }}>
          <button className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>
            CONTACTO
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
