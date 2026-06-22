import React from 'react';

const OurBenefits = () => {
  return (
    <section className="our-benefits-section">
      <div className="benefits-container">
        
        {/* Text Side */}
        <div className="benefits-text-side">
          <h6 className="benefits-subtitle">NUESTROS BENEFICIOS</h6>
          <h2 className="benefits-title">
            Conoce los beneficios de nuestros productos 
            <span className="accent-wrapper">
              &nbsp;naturales
              <img src="/assets/Quesos Zampa/accent.png" alt="Accent" className="benefits-accent" />
            </span>
          </h2>
          
          <ul className="benefits-list">
            <li>
              <span className="benefit-number">01.</span>
              <div className="benefit-content">
                <h4>Cuidado de los Animales</h4>
                <p>Nuestros productores siguen cuidadosamente pautas de bienestar animal garantizando la mejor calidad de la materia prima.</p>
              </div>
            </li>
            <li>
              <span className="benefit-number">02.</span>
              <div className="benefit-content">
                <h4>Productos Innovadores</h4>
                <p>Nuestra gama incluye no solo quesos clásicos, sino especialidades de autor con sabores y texturas únicas.</p>
              </div>
            </li>
            <li>
              <span className="benefit-number">03.</span>
              <div className="benefit-content">
                <h4>Tradición Familiar</h4>
                <p>Utilizamos ingredientes naturales y maduramos nuestros quesos en condiciones óptimas para lograr el sabor perfecto.</p>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Image Side */}
        <div className="benefits-image-side">
          <img src="/assets/Quesos Zampa/tape_top.png" alt="" className="tape-top" />
          <div className="benefits-image-wrapper">
            <img src="/assets/Quesos Zampa/tipos de quesos.jpg" alt="Quesos Zampa" className="benefits-main-image" />
          </div>
          <img src="/assets/Quesos Zampa/tape_down.png" alt="" className="tape-down" />
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
