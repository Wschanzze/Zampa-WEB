import React from 'react';

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <span className="intro-subtitle">FILOSOFÍA ZAMPA</span>
          <h2 className="intro-title">Nuestra Vocación</h2>
          <div className="intro-title-line"></div>
        </div>
        <div className="intro-image-container">
          <img 
            src="/assets/Quesos Zampa/imagen_lapis.jfif" 
            alt="Filosofía Zampa y Sistema Pastoril" 
            className="intro-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
