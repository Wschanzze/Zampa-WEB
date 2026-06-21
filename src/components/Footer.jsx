import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <Link to="/">NUESTROS QUESOS</Link>
          <Link to="/">AHUMADO</Link>
          <Link to="/">PECORINO</Link>
          <Link to="/">ORÉGANO</Link>
        </div>
        
        <div className="footer-col">
          <Link to="/">MANCHEGO</Link>
          <Link to="/">PICADAS</Link>
          <Link to="/">MESA DIARIA</Link>
        </div>
        
        <div className="footer-col footer-center-logo">
          <Link to="/"><img src="/IMG_1960(1).png" alt="Zampa Logo" style={{ height: '70px', objectFit: 'contain' }} /></Link>

        </div>

        <div className="footer-col">
          <Link to="/">INICIO</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/nuestra-historia">NUESTRA HISTORIA</Link>
          <Link to="/elaboracion">ELABORACIÓN</Link>
          <Link to="/revendedores">REVENDEDORES</Link>
          <Link to="/comunidad">COMUNIDAD</Link>
        </div>
        
        <div className="footer-col">
          <a href="#support">SOPORTE</a>
          <Link to="/contacto">CONTACTO</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZAMPA. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
};

export default Footer;
