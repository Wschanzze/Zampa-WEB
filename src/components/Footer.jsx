import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src="/IMG_1960(1).png" alt="Zampa Logo" style={{ height: '90px', objectFit: 'contain' }} />
          </Link>
        </div>
        
        <div className="footer-links">
          <Link to="/productos">Shop Online</Link>
          <span className="separator">|</span>
          <Link to="/nuestra-historia">About</Link>
          <span className="separator">|</span>
          <Link to="/elaboracion">Leche A2</Link>
          <span className="separator">|</span>
          <Link to="/recetas">Recetas</Link>
          <span className="separator">|</span>
          <Link to="/revendedores">Puntos de Venta</Link>
          <span className="separator">|</span>
          <Link to="/contacto">Post Venta</Link>
          <span className="separator">|</span>
          <Link to="/contacto">Atención al Cliente</Link>
          <span className="separator">|</span>
          <a href="mailto:info@zampa.com.ar">info@zampa.com.ar</a>
          <span className="separator">|</span>
          <a href="https://instagram.com/zampa_quesos" target="_blank" rel="noreferrer">@zampa_quesos</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} Zampa. Todos los Derechos Reservados. 
          <Link to="/reembolso">Política de reembolso</Link> 
          <Link to="/privacidad">Política de privacidad</Link> 
          <Link to="/terminos">Términos del servicio</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
