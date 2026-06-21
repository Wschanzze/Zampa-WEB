import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/Quesos Zampa/68C50477-1C39-48B6-86FE-640DEDCA65B1.jpg',
    '/assets/Quesos Zampa/IMG_9816.JPG',
    '/assets/Quesos Zampa/IMG_9858.JPG',
    '/assets/Quesos Zampa/BAB4C1FD-5368-4434-ADE4-498A3AE4D8C6.jpg',
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
        <p className="hero-subtitle premium-hero-subtitle">DE TANDIL PARA TU MESA | 100% PASTORIL</p>
        <h2 className="hero-title premium-hero-title">QUESOS ÚNICOS</h2>
        <div className="premium-hero-badges">
            <span className="badge">100% Pastoril</span>
            <span className="badge">Leche A2</span>
        </div>
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
