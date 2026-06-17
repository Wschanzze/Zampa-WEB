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
          <Link to="/">TIENDA</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/el-chef">EL CHEF</Link>
          <Link to="/comunidad">COMUNIDAD</Link>
        </div>
        
        <div className="footer-col">
          <a href="#support">SOPORTE</a>
          <a href="#contact">CONTACTO</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZAMPA. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
};

export default Footer;
