import React from 'react';

const ProductParallaxSection = () => {
  return (
    <section className="parallax-section">
      <div className="parallax-container">
        
        <img src="/assets/Quesos Zampa/producto_1.png" alt="Queso" className="parallax-img img-float-1" />
        <img src="/assets/Quesos Zampa/producto_2.png" alt="Queso" className="parallax-img img-float-2" />
        <img src="/assets/Quesos Zampa/producto_3.png" alt="Queso" className="parallax-img img-float-3" />
        
        <div className="parallax-content">
          <h2 className="parallax-title">
            Frescura y <span className="text-highlight">naturalidad</span> son los principios de nuestra <span className="text-highlight">producción</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProductParallaxSection;
