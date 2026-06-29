import React from 'react';
import DecoratedTitle from './DecoratedTitle';

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-header">
          <span className="intro-subtitle">FILOSOFÍA ZAMPA</span>
          <DecoratedTitle className="intro-title">Nuestra Vocación</DecoratedTitle>
        </div>

        <div className="intro-grid">
          <div className="intro-image-column">
            <div className="intro-image-wrapper">
              <img 
                src="/assets/Quesos Zampa/imagen_lapis.jfif" 
                alt="Filosofía Zampa y Sistema Pastoril" 
                className="intro-image"
              />
              <div className="intro-badge">
                <span className="intro-badge-number">100%</span>
                <span className="intro-badge-text">CONTROL DE CALIDAD</span>
              </div>
            </div>
          </div>

          <div className="intro-content-column">
            <div className="philosophy-item">
              <span className="philosophy-num">01</span>
              <h3 className="philosophy-heading">Integración Vertical: Del Pasto al Mostrador</h3>
              <p className="philosophy-text">
                Zampa funciona bajo un modelo de cadena completa: criamos nuestras propias ovejas, producimos la leche, elaboramos los quesos y los comercializamos directamente. Sin intermediarios. Este modelo, sumamente exigente, nos permite un control absoluto sobre la calidad de nuestros productos en cada paso del proceso.
              </p>
            </div>

            <div className="philosophy-item">
              <span className="philosophy-num">02</span>
              <h3 className="philosophy-heading">Materia Prima Noble: El Secreto de la Oveja</h3>
              <p className="philosophy-text">
                La leche de oveja supera a la vacuna en concentración de grasas y proteínas. Esto se traduce en quesos con sabores más pronunciados, texturas más ricas y una cremosidad inigualable. Aprovechamos este rendimiento único elaborando nuestros quesos con leche fresca del mismo día, preservando intactas sus propiedades organolépticas naturales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
