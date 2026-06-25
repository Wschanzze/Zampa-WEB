import React, { useRef } from 'react';

const ProductParallaxSection = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    // Normalize coordinates to be -1 to 1 based on the center of the section
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    sectionRef.current.style.setProperty('--mouse-x', x.toFixed(3));
    sectionRef.current.style.setProperty('--mouse-y', y.toFixed(3));
  };

  const handleMouseLeave = () => {
    if (!sectionRef.current) return;
    // Smoothly reset the parallax offset when mouse leaves the section
    sectionRef.current.style.setProperty('--mouse-x', '0');
    sectionRef.current.style.setProperty('--mouse-y', '0');
  };

  return (
    <section 
      className="parallax-section" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating cheeses wrapped to isolate mouse parallax translation from CSS float animation */}
      <div className="parallax-img-wrapper wrapper-1">
        <img 
          src="/assets/Quesos Zampa/producto_1.png" 
          alt="Queso Provoleta Zampa" 
          className="parallax-img" 
        />
      </div>
      <div className="parallax-img-wrapper wrapper-2">
        <img 
          src="/assets/Quesos Zampa/producto_2.png" 
          alt="Queso Tandil Zampa" 
          className="parallax-img" 
        />
      </div>
      <div className="parallax-img-wrapper wrapper-3">
        <img 
          src="/assets/Quesos Zampa/producto_3.png" 
          alt="Queso Ahumado Zampa" 
          className="parallax-img" 
        />
      </div>

      <div className="parallax-container">
        <div className="parallax-card">
          <div className="parallax-badge">
            <span className="badge-line"></span>
            <span className="badge-text">FILOSOFÍA ZAMPA</span>
            <span className="badge-line"></span>
          </div>

          <h2 className="parallax-title">
            Frescura y <span className="text-highlight">naturalidad</span>
            <br />
            son los principios de nuestra <span className="text-highlight">producción</span>
          </h2>

          <div className="parallax-divider">
            <span className="divider-dot"></span>
          </div>

          <p className="parallax-description">
            Desde el pastoreo libre de nuestras ovejas en las sierras de Napaleofú hasta la maduración en nuestra cava. Cada horma se elabora manualmente con paciencia, respetando los tiempos de la naturaleza para lograr un queso premium y honesto.
          </p>

          <div className="parallax-footer">
            <div className="aesthetic-signature">Quesos de Autor • Tandil</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductParallaxSection;
