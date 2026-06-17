import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <a href="#new-arrivals">NUESTROS QUESOS</a>
          <a href="#new-arrivals">AHUMADO</a>
          <a href="#new-arrivals">PECORINO</a>
          <a href="#new-arrivals">ORÉGANO</a>
        </div>
        
        <div className="footer-col">
          <a href="#new-arrivals">MANCHEGO</a>
          <a href="#shop">PICADAS</a>
          <a href="#shop">MESA DIARIA</a>
        </div>
        
        <div className="footer-col footer-center-logo">
          <a href="#"><img src="/IMG_1960(1).png" alt="Zampa Logo" style={{ height: '70px', objectFit: 'contain' }} /></a>

        </div>

        <div className="footer-col">
          <a href="#shop">TIENDA</a>
          <a href="#about">HISTORIA</a>
          <a href="#">TANDIL</a>
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
