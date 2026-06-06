import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <img 
        src="/assets/images/hero_rope_horse_1780357474009.png" 
        alt="Hand holding a rope on a horse" 
        className="hero-bg" 
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">PEAK PERFORMANCE | BUILT TO LAST</p>
        <h2 className="hero-title">ROPING AND<br />RANCHING SUPPLIES</h2>
        <a href="#new-arrivals" className="btn btn-primary">SHOP NEW ARRIVALS</a>
      </div>
    </header>
  );
};

export default Hero;
