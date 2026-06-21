import React from 'react';

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
        <p className="hero-description">
          Elaboramos quesos de oveja de alta gama bajo un sistema 100% pastoril. 
          Respetamos el bienestar animal y los ciclos de la naturaleza para llevar 
          un producto noble y de carácter único a tu mesa.
        </p>
      </div>
      <h1 className="watermark-logo" style={{ bottom: '5%', right: '5%' }}>ZAMPA<br />QUESOS<br />TANDIL</h1>
    </header>
  );
};

export default Hero;
