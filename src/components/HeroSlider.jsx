import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
    '/assets/Quesos Zampa/IMG_9816.JPG',
    '/assets/Quesos Zampa/IMG_9858.JPG',
    '/assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
  ];

  const titles = [
    ['QUESOS', 'ÚNICOS'],
    ['CRIAMOS', 'NUESTRAS OVEJAS'],
    ['PRODUCIMOS', 'NUESTRA LECHE'],
    ['ELABORAMOS', 'NUESTROS QUESOS']
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      {/* Background Slides */}
      <div className="hero-slideshow">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Static Content */}
      <div className="hero-content premium-hero-content">
        <p className="hero-subtitle premium-hero-subtitle">DE TANDIL A TU MESA | 100% PASTORIL</p>
        <h2 
          key={currentSlide} 
          className={`hero-title premium-hero-title premium-hero-title-active ${currentSlide === 0 ? 'first-slide-title' : ''}`}
        >
          {titles[currentSlide].map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < titles[currentSlide].length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
        <p className="hero-subtitle premium-hero-subtitle" style={{ marginBottom: 0 }}>QUESOS DE OVEJA | LECHE A2</p>
      </div>

      {/* Slider Controls (Bullets) */}
      <div className="hero-bullets">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-bullet ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
