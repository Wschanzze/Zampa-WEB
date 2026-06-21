import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="hero">
      <img 
        src="/assets/Quesos Zampa/IMG_9816.JPG" 
        alt="Producción de quesos Zampa" 
        className="hero-bg" 
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">DE TANDIL PARA TU MESA | 100% PASTORIL</p>
        <h2 className="hero-title">PRODUCCIÓN ARTESANAL<br />DE QUESO DE OVEJA</h2>
        <div className="hero-buttons">
          <Link to="/nuestra-historia" className="btn btn-secondary">Conocer la historia</Link>
          <Link to="/productos" className="btn btn-primary">Ver los quesos</Link>
        </div>
      </div>
      <h1 className="watermark-logo" style={{ bottom: '5%', right: '5%' }}>ZAMPA<br />QUESOS<br />TANDIL</h1>
    </header>
  );
};

export default Hero;
