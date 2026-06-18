import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {

  return (
    <section className="our-story" id="about">
      <div className="story-container">
        <div className="story-image">
          <img 
            src="/assets/Quesos Zampa/IMG_9879.JPG" 
            alt="Juan Cruz e Isabel" 
          />
          <h1 className="watermark-logo" style={{ bottom: '-10%', right: '-5%', opacity: '0.15' }}>ZAMPA<br />QUESOS<br />TANDIL</h1>
        </div>
        <div className="story-text">
          <p className="story-subtitle">TANDIL, ARGENTINA</p>
          <h3 className="story-title">NUESTRA HISTORIA</h3>
          <p>Zampa nació hace tres años como un proyecto de vida compartido por Juan Cruz e Isabel, tras adquirir nuestras primeras 40 borregas frisonas lecheras. El nombre rinde homenaje al arbusto del sur argentino, asociado a la gran calidad del ganado ovino.</p>
          <p>Somos un emprendimiento familiar con base en Napaleofú que integra todo el proceso de elaboración de nuestros quesos, desde la cría hasta la maduración.</p>
          <Link to="/nosotros" className="btn btn-secondary">LEER MÁS SOBRE NOSOTROS</Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
