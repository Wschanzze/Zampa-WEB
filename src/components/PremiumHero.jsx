import React from 'react';

const PremiumHero = () => {
  return (
    <section className="premium-hero">
      <img 
        src="/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg" 
        alt="Textura de queso Zampa" 
        className="premium-hero-bg" 
      />
      <div className="premium-hero-overlay"></div>
      
      <div className="premium-hero-content">
        <h2 className="premium-hero-title">
          Quesos<br/>únicos
        </h2>
        <p className="premium-hero-subtitle">Auténtico Queso de Oveja Pastoril</p>
        
        <div className="premium-hero-badges">
          <div className="badge-item">
            <span className="badge-icon">100%</span>
            <span className="badge-text">PASTORIL</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">A2</span>
            <span className="badge-text">CASEÍNA</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">★</span>
            <span className="badge-text">ARTESANAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
