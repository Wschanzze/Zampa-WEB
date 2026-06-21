import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
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
          <NavLink to="/contacto" className="nav-contact-btn-link" style={{ padding: 0 }}>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
              CONTACTO
            </button>
          </NavLink>
        </div>

        <div className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
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
